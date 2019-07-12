export const errorHandler = (err: any): string => {
  if (process.env.NODE_ENV !== 'production') console.error(err);
  let message = '';

  switch (typeof err) {
    case 'string':
      message = err;
      break;
    case 'object': {
      const { response } = err;
      if (!response) {
        ({ message } = err);
      } else if (typeof response.data === 'object') {
        ({ message } = response.data);
      } else {
        message = response.statusText;
      }
      break;
    }
    default:
      message = '알 수 없는 문제가 발생하였습니다.';
  }
  return message;
};
