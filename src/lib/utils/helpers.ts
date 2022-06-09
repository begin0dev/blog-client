let idCounter = 0;

export function generateID(prefix = 'blog-id-') {
  return `${prefix}${(idCounter += 1)}`;
}

export const cx = (...args: Array<string | [string, boolean]>) => {
  return args
    .reduce((acc: string[], cur) => {
      if (typeof cur === 'string') acc.push(cur);
      if (cur?.[1]) acc.push(cur[0]);
      return acc;
    }, [])
    .join(' ');
};
