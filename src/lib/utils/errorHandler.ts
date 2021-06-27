import { AxiosError } from 'axios';

function isAxiosError(err: Error | AxiosError): err is AxiosError {
  return (err as AxiosError).isAxiosError;
}

export const errorHandler = (err: Error | AxiosError): string => {
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
