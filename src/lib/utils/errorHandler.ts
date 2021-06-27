import { AxiosError } from 'axios';

function isAxiosError(err: Error | AxiosError): err is AxiosError {
  return (err as AxiosError).isAxiosError;
}

export const errorHandler = (err: Error | AxiosError): string => {
  if (process.env.NODE_ENV !== 'production') console.error(err);
  let message: string;

  if (isAxiosError(err)) {
    const { response } = err;
    if (!response) {
      ({ message } = err);
    } else if (typeof response.data === 'object') {
      ({ message } = response.data);
    } else {
      message = response.statusText;
    }
  } else {
    ({ message } = err as Error);
  }

  return message;
};
