import mongoose from "mongoose";
import config from "./config";
import validator from "validator";

export const connect = (url = config.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};

export const validate = (data): any => {
  const invalidFields: any = [];
  const { email, firstName, lastName, password, type } = data;

  if (!validator.isEmail(email)) {
    invalidFields.push("email");
  }

  if (validator.isEmpty(firstName)) {
    invalidFields.push("firstName");
  }

  if (validator.isEmpty(lastName)) {
    invalidFields.push("lastName");
  }

  if (validator.isEmpty(type)) {
    invalidFields.push("type");
  }

  return invalidFields;
};
