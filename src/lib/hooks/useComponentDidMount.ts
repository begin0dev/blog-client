import { useRef, useEffect } from 'react';

function useComponentDidMount(callback: () => void) {
  const onlyFirstCallback = useRef(callback);

  useEffect(() => {
    onlyFirstCallback.current();
  }, []);
}

export default useComponentDidMount;
