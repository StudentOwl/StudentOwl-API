import createHTTPError from "http-errors";

export const itemNotFound = id => {
  return createHTTPError(400, `${id} item does not exist`);
};

export const errorUndefined = err => {
  return createHTTPError(500, err.message);
};
