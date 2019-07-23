import * as React from 'react';
import Lottie from 'react-lottie';

import lottieJson from 'assets/lotties/404page.json';
import { NotFoundPageBlock } from './NotFoundPage.styles';

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
      <Lottie options={defaultOptions.current} />
    </NotFoundPageBlock>
  );
});

export default NotFoundPage;
