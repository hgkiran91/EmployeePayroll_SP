import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required(),
    password: Joi.string().min(3).max(12).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const employeeValidator = (req, res, next) => {
  const schema = Joi.object({
    emp_name: Joi.string().min(3).required(),
    emp_email: Joi.string().required(),
    emp_dob: Joi.string().required(),
    emp_phone: Joi.string().min(3).required(),
    emp_address: Joi.string().min(8).required(),
    emp_city: Joi.string().min(8).required(),
    emp_joining_date: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};