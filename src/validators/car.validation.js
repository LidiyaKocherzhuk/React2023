import Joi from 'joi';

const carValidation = Joi.object({
  brand: Joi.string().required().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).message({
    'string.pattern.base': 'Only letters min 1 and max 20 ch.'
  }),
  price: Joi.number().required().min(0).max(1_000_000).message({
    'number.min': 'min 1',
    'number.max': 'max 1_000_000'
  }),
  year: Joi.number().required().min(1990).max(new Date().getFullYear()).message({
    'number.min': 'min 1990',
    'number.max': `max ${new Date().getFullYear()}`
  }),
});

export {carValidation};

