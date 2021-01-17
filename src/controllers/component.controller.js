import Component from "../models/Component";
import createHTTPError from "http-errors";
import { itemNotFound, errorUndefined } from "../utils/commonErrors";

export const findAllComponents = async (req, res, next) => {
  try {
    const components = await Component.find();
    res.json({ status: "Correct", count: components.length, data: components });
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const findOneComponent = async (req, res, next) => {
  try {
    const component = await Component.findById(req.params.id);

    if (component) {
      res.json({ status: "Correct", data: component });
    } else {
      next(itemNotFound(req.params.id));
    }
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const createComponent = async (req, res, next) => {
  const newComponent = new Component({
    _id: req.body._id,
    name: req.body.name,
    teacher: req.body.teacher,
    students: req.body.students ? req.body.students : []
  });

  try {
    await newComponent.save();
    res.status(201).json({ status: "Created", data: newComponent });
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const updateComponent = async (req, res, next) => {
  try {
    const component = await Component.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (component) {
      res.json({ status: "Updated", data: component });
    } else {
      next(itemNotFound(req.params.id));
    }
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const deleteComponent = async (req, res, next) => {
  try {
    const deleted = await Component.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.json({ status: `Deleted ${deleted._id} item` });
    } else {
      next(itemNotFound(req.params.id));
    }
  } catch (err) {
    next(errorUndefined(err));
  }
};

export const deleteAllComponent = async (req, res, next) => {
  try {
    const deleteds = await Component.deleteMany({});
    if (deleteds) {
      res.json({ status: `Deleted ${deleteds.length} items` });
    }
  } catch (err) {
    next(errorUndefined(err));
  }
};
