import createHTTPError from "http-errors";

export const itemNotFound = id => {
  return createHTTPError(400, `${id} item does not exist`);
};

export const errorUndefined = err => {
  return createHTTPError(500, err.message);
};

export const noValues = count => {
  return createHTTPError(400, `${count} elementos`);
};

export const createCorrect = (res, values) => {
  return res.status(201).json({ status: "Created", data: values });
};

export const createIncorrect = () => {
  return createHTTPError(400, "No crated");
};
