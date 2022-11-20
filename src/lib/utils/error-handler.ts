import { HTTPError } from 'ky';

// interface JsendErrorInterface {
//   status: 'error';
//   message: string;
// }

export function errorHandler(err: Error | HTTPError): string {
  if (import.meta.env.NODE_ENV !== 'production') console.error(err);

  return err.message;
}
