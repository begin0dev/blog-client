import * as React from 'react';
import Lottie from 'react-lottie';

import lottieJson from 'assets/lotties/not-found.json';
import { NotFoundPageBlock, NotFoundCenterBlock } from './NotFoundPage.styles';

const NotFoundPage = React.memo(() => {
  const defaultOptions = React.useRef({
    loop: true,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  return (
    <NotFoundPageBlock>
      <NotFoundCenterBlock>
        <Lottie options={defaultOptions.current} />
      </NotFoundCenterBlock>
    </NotFoundPageBlock>
  );
});

export default NotFoundPage;
