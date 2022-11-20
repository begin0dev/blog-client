import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

type BaseQs = Record<string, string | string[]>;

export function useQueryString<Q extends BaseQs = BaseQs>() {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryString = useMemo(
    () =>
      [...searchParams.entries()].reduce<BaseQs>((acc, [key, value]) => {
        const prevKeyValue = acc[key];
        if (prevKeyValue) {
          if (Array.isArray(prevKeyValue)) prevKeyValue.push(value);
          else acc[key] = [prevKeyValue, value];
        } else {
          acc[key] = value;
        }
        return acc;
      }, {}),
    [searchParams],
  ) as Q;

  return [queryString, setSearchParams] as const;
}
