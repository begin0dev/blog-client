import * as React from 'react';
import qs from 'qs';
import _ from 'lodash';
import Joi from '@hapi/joi';
import produce from 'immer';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import useForm from 'lib/hooks/useForm';
import { FormNameTypes, AuthActions } from 'store/modules/auth';
import { checkUserActions } from 'store/modules/user';
import { IStoreState } from 'store/modules';
import { baseURL } from 'lib/services/apiClient';
import { validationHelper } from 'lib/utils/validationHelper';
import { errorHandler } from 'lib/utils/errorHandler';
import { authFormSchema } from 'lib/validations/authFormSchema';
import { localLoginApi, localRegisterApi, SOCIAL_URL } from 'lib/services/auth';
import { palette } from 'styles/palette';
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

const AuthContainer: React.FunctionComponent<RouteComponentProps> = ({ history, location: { pathname, search } }) => {
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
      setSubmitError(null);
      dispatch(AuthActions.toggleAuthForm(form));
    },
    [dispatch],
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

  const socialRedirect = React.useCallback((provider: 'facebook' | 'kakao') => {
    window.location.href = `${baseURL}${SOCIAL_URL}/${provider}`;
  }, []);

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
      if (isSubmitLoading) return;
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
        hideModal();
      } catch (err) {
        const message = errorHandler(err);
        setSubmitError(message);
      } finally {
        setSubmitLoading(false);
      }
    },
    [dispatch, formName, isSubmitLoading, authFormValue, setError, resetAuthForm, hideModal],
  );

  React.useEffect(() => {
    if (search) {
      const queryString = qs.parse(search, { ignoreQueryPrefix: true });
      if (queryString.form) dispatch(AuthActions.toggleAuthForm(queryString.form));
      if (queryString.form || queryString.message) {
        const replaceQs = qs.stringify(
          produce(queryString, (draft: any) => {
            delete draft.form;
            delete draft.message;
          }),
        );
        const path: string = `${pathname}?${replaceQs}`;
        history.replace(path);
      }
    }
  }, [dispatch, pathname, search]);

  React.useEffect(() => {
    dispatch(checkUserActions.request());
  }, [dispatch]);

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
        socialRedirect={socialRedirect}
        isSubmitLoading={isSubmitLoading}
        toggleAuthForm={toggleAuthForm}
      />
    </Modal>
  );
};

export default withRouter(AuthContainer);
