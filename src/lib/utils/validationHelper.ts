import _ from 'lodash';
import Joi from '@hapi/joi';

export function validationHelper<T>(
  form: T,
  schemaObject: Joi.SchemaMap,
): { error: Joi.ValidationErrorItem[]; value: T } {
  const schema = Joi.object().keys(schemaObject);
  const { error, value } = Joi.validate(form, schema, { abortEarly: false });
  return {
    error: error
      ? _.chain(error.details)
          .uniqBy('context.label')
          .value()
      : [],
    value,
  };
}
