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
  if (req.query.msStart) {
    filter["time"] = { $gte: new Date(parseInt(req.query.msStart)) };
  }
  if (req.query.msEnd) {
    filter["time"]["$lt"] = new Date(parseInt(req.query.msEnd));
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
