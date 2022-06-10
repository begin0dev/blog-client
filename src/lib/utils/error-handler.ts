import { HTTPError } from 'ky';

// interface JsendErrorInterface {
//   status: 'error';
//   message: string;
// }

function isResponseError(err: Error | HTTPError): err is HTTPError {
  return err.hasOwnProperty('response');
}

export function errorHandler(err: Error | HTTPError): string {
  if (process.env.NODE_ENV !== 'production') console.error(err);

  if (isResponseError(err)) {
  }

  return err.message;
}
