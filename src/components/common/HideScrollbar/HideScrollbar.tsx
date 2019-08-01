import React from 'react';

const HideScrollbar: React.FunctionComponent = () => {
  React.useEffect(() => {
    if (document.body) document.body.style.overflowY = 'hidden';
    return () => {
      if (document.body) document.body.style.overflowY = 'auto';
    };
  });

  return null;
};

export default HideScrollbar;
