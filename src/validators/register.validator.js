import Joi from 'joi';

import {regex} from "../constants";

const registerValidator = Joi.object({
  
    username: Joi.string().pattern(regex.username).min(1).max(20).required().messages({
      'string.pattern.base': 'First char must be letter.',
      'string.min': 'Ensure this field has no min than 2 characters.',
      'string.max': 'Ensure this field has no more than 20 characters.'
    }),
  
    password: Joi.string().pattern(regex.password).required().messages({
      'string.pattern.base': 'Password must contain 1 number, 1 uppercase letter", 1 lowercase letter, 1 non-alpha numeric and min 8 max 20 characters',
    }),
  
    re_password: Joi.any().equal(Joi.ref('password')).messages({
      'any.only': 'This field must confirm password'
    })
  
});

export {registerValidator};