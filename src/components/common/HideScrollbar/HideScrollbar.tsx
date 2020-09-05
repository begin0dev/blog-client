import React, { useEffect } from 'react';

const HideScrollbar: React.FunctionComponent = () => {
  useEffect(() => {
    if (document.body) document.body.style.overflowY = 'hidden';
    return () => {
      if (document.body) document.body.style.removeProperty('overflow-y');
    };
  }, []);

  return null;
};

export default HideScrollbar;
