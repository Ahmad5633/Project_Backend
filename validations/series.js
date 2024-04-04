import Joi from "joi";

export const SeriesSchema = {
  add: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      trailer_id: Joi.string(),
      thumbnail_id: Joi.string(),
    }),
  },
  update: {
    body: Joi.object().keys({
      name: Joi.string(),
      description: Joi.string(),
      trailer_id: Joi.string(),
      thumbnail_id: Joi.string(),
    }),
  },
};
