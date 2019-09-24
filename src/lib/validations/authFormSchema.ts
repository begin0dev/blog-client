import Joi from '@hapi/joi';

export const authFormSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string()
    .email()
    .trim()
    .required()
    .options({
      language: {
        any: { empty: '!!이메일은 필수 입력사항입니다.' },
        string: { email: '!!이메일 형식이 올바르지 않습니다.' },
      },
    }),
  password: Joi.string()
    .trim()
    .required()
    .min(6)
    .max(20)
    .options({
      language: {
        any: { empty: '!!비밀번호는 필수 입력사항입니다.' },
        string: {
          min: '!!비밀번호는 최소 6자 입니다.',
          max: '!!비밀번호는 최대 20자 입니다.'
        }
      },
    }),
  passwordConfirm: Joi.string()
    .trim()
    .required()
    .valid(Joi.ref('password'))
    .options({
      language: {
        any: { empty: '!!비밀번호 확인은 필수 입력사항입니다.', allowOnly: '!!비밀번호가 일치하지 않습니다.' },
      },
    }),
  displayName: Joi.string()
    .trim()
    .required()
    .min(2)
    .max(10)
    .options({
      language: {
        any: { empty: '!!닉네임은 필수 입력사항입니다.' },
        string: {
          min: '!!닉네임은 2글자보다는 많아야 합니다.',
          max: '!!닉네임은 10글자보다는 작아야 합니다.',
        },
      },
    }),
});
