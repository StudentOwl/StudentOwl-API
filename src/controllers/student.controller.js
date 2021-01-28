import { errorUndefined } from "../utils/commonErrors";
import Student from "../models/Estudent";

import { findOneComponentExtra } from "./component.controller";

export const getAllStudents = async (req, res, next) => {
  const filter = {};

  const component = await findOneComponentExtra(req.params.component);

  if (component) {
    filter["username"] = component.students;
  }

  console.log(filter);

  try {
    const students = await Student.find(filter, { _id: 0 });
    res.json({ status: "Correct", count: students.length, data: students });
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const getOneStudent = async (req, res, next) => {
  const filter = {};

  try {
    const student = await Student.findOne({ username: req.query.student });
    res.json({ status: "correcto", data: student });
  } catch (err) {
    next(errorUndefined(err));
  }
};
