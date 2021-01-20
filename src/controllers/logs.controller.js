import {
  itemNotFound,
  errorUndefined,
  noValues,
  createCorrect,
  createIncorrect
} from "../utils/commonErrors";
// import logsDb from "../databases/logs";
import Log from "../models/Log";

export const findLogs = async (req, res, next) => {
  // const Log = (await logsDb).model(req.params.component);

  const filter = {};

  if (req.params.component) {
    filter["component"] = req.params.component;
  }
  if (req.params.student) {
    filter["student"] = req.params.student;
  }
  if (req.query.component) {
    filter["component"] = req.query.component;
  }
  if (req.query.student) {
    filter["student"] = req.query.student;
  }
  if (req.query.msStart) {
    filter["time"] = { $gte: new Date(parseInt(req.query.msStart)) };
  }
  if (req.query.msEnd) {
    filter["time"]["$lt"] = new Date(parseInt(req.query.msEnd));
  }

  // console.log(filter);
  try {
    const logs = await Log.find(filter);
    res.json({ status: "Correct", count: logs.length, data: logs });
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const saveNewLogs = async (req, res, next) => {
  // const Log = (await logsDb).model(req.params.component);
  const body = Array.isArray(req.body) ? req.body : [];
  const student = req.params.student;

  if (body.length === 0) {
    next(noValues(body.length));
  }

  try {
    const logs = await Log.insertMany(body);

    if (logs) {
      createCorrect(res, logs);
    } else {
      next(createIncorrect());
    }
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const deleteAllLogs = async (req, res, next) => {
  try {
    const deleteds = await Log.deleteMany({});
    // console.log(deleteds);
    if (deleteds) {
      res.json({ status: `Deleted ${deleteds["deletedCount"]} items` });
    }
  } catch (err) {
    next(errorUndefined(err));
  }
};
