import { AxiosError } from 'axios';

interface JsendErrorInterface {
  status: 'error';
  message: string;
}

function isAxiosError(err: Error | AxiosError): err is AxiosError<JsendErrorInterface> {
  return (err as AxiosError).isAxiosError;
}

export const errorHandler = (err: Error | AxiosError<JsendErrorInterface>): string => {
  if (process.env.NODE_ENV !== 'production') console.error(err);
  let message: string;

  if (isAxiosError(err) && err.response) {
    const { response } = err;
    message = response.data?.message || response.statusText;
  } else {
    ({ message } = err);
  }

  return message;
};
