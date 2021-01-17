import {
  itemNotFound,
  errorUndefined,
  noValues,
  createCorrect,
  createIncorrect
} from "../utils/commonErrors";
import logsDb from "../databases/logs";

export const capitalizeComponentId = async (req, res, next, component) => {
  req.params.component = component.toUpperCase();
  next();
};

export const findAllLogsByComponent = async (req, res, next) => {
  const Log = (await logsDb).model(req.params.component);

  const filter = {};

  if (req.params.student) {
    filter["student"] = req.params.student;
  }
  if (req.params.msStart) {
    filter["time"] = { $gte: new Date(parseInt(req.params.msStart)) };
  }
  if (req.params.msEnd) {
    filter["time"]["$lt"] = new Date(parseInt(req.params.msEnd));
  }

  console.log(filter);
  try {
    const logs = await Log.find(filter);
    res.json({ status: "Correct", count: logs.length, data: logs });
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const saveNewLogs = async (req, res, next) => {
  const Log = (await logsDb).model(req.params.component);
  const body = Array.isArray(req.body) ? req.body : [];
  const student = req.params.student;

  if (body.length === 0) {
    next(noValues(body.length));
  }

  var values = body.map(x => {
    var ot = Object.assign(x);
    ot["student"] = student;
    return ot;
  });

  try {
    const logs = await Log.insertMany(values);

    if (logs) {
      createCorrect(res, logs);
    } else {
      next(createIncorrect());
    }
  } catch (err) {
    next(errorUndefined(err));
  }
};

// export const findOneComponent = async (req, res, next) => {
//   const Component = (await logsDb).model("Component");

//   try {
//     const component = await Component.findById(req.params.id);

//     if (component) {
//       res.json({ status: "Correct", data: component });
//     } else {
//       next(itemNotFound(req.params.id));
//     }
//   } catch (err) {
//     next(errorUndefined(err));
//   }
// };

// export const createComponent = async (req, res, next) => {
//   const Component = (await logsDb).model("Component");
//   const newComponent = new Component({
//     _id: req.body._id,
//     name: req.body.name,
//     teacher: req.body.teacher,
//     students: req.body.students ? req.body.students : []
//   });

//   try {
//     await newComponent.save();
//     res.status(201).json({ status: "Created", data: newComponent });
//   } catch (err) {
//     next(errorUndefined(err));
//   }
// };

// export const updateComponent = async (req, res, next) => {
//   const Component = (await logsDb).model("Component");

//   try {
//     const component = await Component.findByIdAndUpdate(
//       req.params.id,
//       req.body
//     );
//     if (component) {
//       res.json({ status: "Updated", data: component });
//     } else {
//       next(itemNotFound(req.params.id));
//     }
//   } catch (err) {
//     next(errorUndefined(err));
//   }
// };

// export const deleteComponent = async (req, res, next) => {
//   const Component = (await logsDb).model("Component");

//   try {
//     const deleted = await Component.findByIdAndDelete(req.params.id);
//     if (deleted) {
//       res.json({ status: `Deleted ${deleted._id} item` });
//     } else {
//       next(itemNotFound(req.params.id));
//     }
//   } catch (err) {
//     next(errorUndefined(err));
//   }
// };

// export const deleteAllComponent = async (req, res, next) => {
//   const Component = (await logsDb).model("Component");

//   try {
//     const deleteds = await Component.deleteMany({});
//     if (deleteds) {
//       res.json({ status: `Deleted ${deleteds.length} items` });
//     }
//   } catch (err) {
//     next(errorUndefined(err));
//   }
// };
