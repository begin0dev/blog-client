import _ from 'lodash';
import Joi from '@hapi/joi';

export function validationHelper<T>(
  form: T,
  schemaObject: Joi.SchemaMap,
): { error: Joi.ValidationErrorItem[]; value: T } {
  const schema: Joi.ObjectSchema = Joi.object(schemaObject);
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
