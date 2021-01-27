import {
  itemNotFound,
  errorUndefined,
  noValues,
  createCorrect,
  createIncorrect
} from "../utils/commonErrors";
// import logsDb from "../databases/logs";
import Log from "../models/Log";
import * as LogDAO from "../dao/log.dao";

const findLogsFn = async req => {
  try {
    const logs = await LogDAO.findLogs(req.query);
    return { status: "Correct", count: logs.length, data: logs };
  } catch (err) {
    return errorUndefined(err);
  }
};

export const findLogs = async (req, res, next) => {
  // const Log = (await logsDb).model(req.params.component);

  const respuesta = await findLogsFn(req);

  if (respuesta) {
    res.json(respuesta);
  } else {
    next(respuesta);
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

export const getApplicationData = async (req, res, next) => {
  // const Log = (await logsDb).model(req.params.component);

  const respuesta = await findLogsFn(req);

  if (respuesta) {
    var dataProcc = {};
    var labels = [];
    // var data = [];

    labels = [
      ...new Set(
        respuesta.data.map(function (log) {
          return log.applicationName;
        })
      )
    ];

    labels.forEach(label => {
      dataProcc[label] = 0;
    });

    respuesta.data.forEach(log => {
      dataProcc[log.applicationName] += log.duration;
    });

    res.json(dataProcc);
  } else {
    next(respuesta);
  }
};

export const totalTimes = async (req, res, next) => {
  try {
    const logs = await LogDAO.timePerDate(req.query);
    res.json({ status: "Correct", count: logs.length, data: logs });
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const totalHours = async (req, res, next) => {
  try {
    const logs = await LogDAO.timePerHour(req.query);
    res.json({ status: "Correct", count: logs.length, data: logs });
  } catch (err) {
    next(errorUndefined(err));
  }
};
