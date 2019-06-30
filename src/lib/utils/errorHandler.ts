export const errorHandler = (err: any): string => {
  let message = '';
  switch (typeof err) {
    case 'string':
      message = err;
      break;
    case 'object': {
      if (process.env.NODE_ENV !== 'production') console.error(err.response);
      const {
        response: { data, statusText },
      } = err;
      if (typeof data === 'object') {
        ({ message } = data);
      } else {
        message = statusText;
      }
      break;
    }
    default:
      message = '알 수 없는 문제가 발생하였습니다.';
  }
  return message;
};
