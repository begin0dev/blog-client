import * as React from 'react';
import _ from 'lodash';
import Joi from '@hapi/joi';
import { useDispatch, useSelector } from 'react-redux';

import useForm from 'lib/hooks/useForm';
import { FormNameTypes, AuthActions } from 'store/modules/auth';
import { checkUserActions } from 'store/modules/user';
import { validationHelper } from 'lib/utils/validationHelper';
import { errorHandler } from 'lib/utils/errorHandler';
import { authFormSchema } from 'lib/validations/authFormSchema';
import { localLoginApi, localRegisterApi } from 'lib/services/auth';
import { palette } from 'styles/palette';
import { IStoreState } from 'store/modules';
import { Auth, Modal } from 'components';

export interface IAuthForm {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}
export interface IFormError {
  email: string | null;
  password: string | null;
  passwordConfirm: string | null;
  displayName: string | null;
}

const AuthContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const formName = useSelector((state: IStoreState) => state.auth.formName);
  const isMobile = useSelector((state: IStoreState) => state.base.isMobile);
  const isLogged = useSelector((state: IStoreState) => state.user.isLogged);

  const modalSize = React.useRef<{ width: string }>({ width: '370px' });

  const [isSubmitLoading, setSubmitLoading] = React.useState<boolean>(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [authFormValue, setAuthFormValue, , resetAuthForm] = useForm<IAuthForm>({
    email: '',
    password: '',
    passwordConfirm: '',
    displayName: '',
  });
  const [authFormError, , setError, resetError] = useForm<IFormError>({
    email: null,
    password: null,
    passwordConfirm: null,
    displayName: null,
  });

  const hideModal = React.useCallback(() => {
    resetError();
    dispatch(AuthActions.toggleAuthForm(null));
  }, [dispatch, resetError]);

  const toggleAuthForm = React.useCallback(
    (form: FormNameTypes) => () => {
      resetError();
      dispatch(AuthActions.toggleAuthForm(form));
    },
    [dispatch, resetError],
  );

  const onChangeEvent = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = e.target;
      setError({ name: name as keyof IAuthForm, value: null });
      setSubmitError(null);
      setAuthFormValue(e);
    },
    [setAuthFormValue, setError],
  );

  const onBlurEvent = React.useCallback(
    ({ target: { name } }: React.FocusEvent<HTMLInputElement>) => {
      const { error } = validationHelper(authFormValue, authFormSchema);
      const err = error.find((o: Joi.ValidationErrorItem) => o.context && o.context.label === name);
      setError({ name: name as keyof IAuthForm, value: err ? err.message : null });
    },
    [authFormValue, setError],
  );

  const authFormSubmit = React.useCallback(
    async e => {
      e.preventDefault();
      if (!formName) return;
      if (submitError) return;
      const { error, value } = validationHelper(authFormValue, authFormSchema);
      let errs = error;
      if (formName === 'logIn')
        errs = errs.filter(
          (o: Joi.ValidationErrorItem) =>
            o.context && o.context.label && ['email', 'password'].includes(o.context.label),
        );
      errs.forEach((o: Joi.ValidationErrorItem) => {
        if (!o.context || !o.context.label) return;
        setError({ name: o.context.label as keyof IAuthForm, value: o.message || null });
      });
      if (errs.length > 0) return;
      setSubmitLoading(true);
      try {
        if (formName === 'logIn') {
          await localLoginApi(_.pick(value, 'email', 'password'));
        } else {
          await localRegisterApi(value);
        }
        dispatch(checkUserActions.request());
        resetAuthForm();
      } catch (err) {
        const message = errorHandler(err);
        setSubmitError(message);
      } finally {
        setSubmitLoading(false);
      }
    },
    [formName, submitError, authFormValue, setError, resetAuthForm, dispatch],
  );

  React.useEffect(() => {
    if (!isLogged) dispatch(checkUserActions.request());
  }, [dispatch, isLogged]);

  React.useEffect(() => {
    return () => resetAuthForm();
  }, [resetAuthForm]);

  return isLogged ? null : (
    <Modal
      active={!!formName}
      fullScreen={isMobile}
      size={modalSize.current}
      backgroundColor={palette.black}
      hideModal={hideModal}
    >
      <Auth
        authFormValue={authFormValue}
        authFormSubmit={authFormSubmit}
        authFormError={authFormError}
        formName={formName}
        onBlurEvent={onBlurEvent}
        onChangeEvent={onChangeEvent}
        submitError={submitError}
        isSubmitLoading={isSubmitLoading}
        toggleAuthForm={toggleAuthForm}
      />
    </Modal>
  );
};

export default AuthContainer;
