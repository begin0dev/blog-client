import _ from 'lodash';
import Joi from '@hapi/joi';

export function validationHelper<T>(
  form: T,
  schema: Joi.ObjectSchema,
): { error: Joi.ValidationErrorItem[]; value: T } {
  const { error, value }: Joi.ValidationResult<T> = schema.validate(form, { abortEarly: false });
  return {
    error: error
      ? _.chain(error.details)
          .uniqBy('context.label')
          .value()
      : [],
    value,
  };
}
