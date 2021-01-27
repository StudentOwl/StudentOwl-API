import Log from "../models/Log";

export const findLogs = async query => {
  const filter = {};
  var limit = 0;

  if (query.component) {
    filter["component"] = query.component;
  }
  if (query.student) {
    filter["student"] = query.student;
  }
  if (query.msStart) {
    filter["time"] = { $gte: new Date(parseInt(query.msStart)) };

    if (query.msEnd) {
      filter["time"]["$lt"] = new Date(parseInt(query.msEnd));
    } else {
      filter["time"]["$lt"] = new Date();
    }
  }

  try {
    const logs = await Log.find(filter, [
      "_id",
      "student",
      "applicationName",
      "action",
      "duration",
      "time"
    ])
      .limit(limit)
      .sort({ time: -1 });
    return logs;
  } catch (err) {
    throw err;
  }
};

export const timePerDate = async query => {
  const filter = {};
  var limit = 0;

  if (query.component) {
    filter["component"] = query.component;
  }
  if (query.student) {
    filter["student"] = query.student;
  }
  if (query.msStart) {
    filter["time"] = { $gte: new Date(parseInt(query.msStart)) };

    if (query.msEnd) {
      filter["time"]["$lt"] = new Date(parseInt(query.msEnd));
    } else {
      filter["time"]["$lt"] = new Date();
    }
  }

  // console.log("Entro");

  try {
    const logs = await Log.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$time" } },
          totalTime: {
            $sum: "$duration"
          }
        }
      }
    ]);
    // console.log(logs);
    return logs;
  } catch (err) {
    throw err;
  }
};

export const timePerHour = async query => {
  const filter = {};
  var limit = 0;

  if (query.component) {
    filter["component"] = query.component;
  }
  if (query.student) {
    filter["student"] = query.student;
  }
  if (query.msStart) {
    filter["time"] = { $gte: new Date(parseInt(query.msStart)) };

    if (query.msEnd) {
      filter["time"]["$lt"] = new Date(parseInt(query.msEnd));
    } else {
      filter["time"]["$lt"] = new Date();
    }
  }

  // console.log("Entro");

  try {
    const logs = await Log.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%H", date: "$time" } },
          totalTime: {
            $sum: "$duration"
          }
        }
      }
    ]);
    // console.log(logs);
    return logs;
  } catch (err) {
    throw err;
  }
};
