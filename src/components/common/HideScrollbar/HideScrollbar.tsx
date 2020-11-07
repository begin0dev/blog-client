import { useEffect, memo } from 'react';

function HideScrollbar(): null {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.removeProperty('overflow-y');
    };
  }, []);

  return null;
}

export default memo(HideScrollbar);
