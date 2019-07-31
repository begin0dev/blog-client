import * as React from 'react';
import Lottie from 'react-lottie';

import lottieJson from 'assets/lotties/loading.json';
import { LoadingBlock, LoadingWrap } from './Loading.styles';

interface IProps {
  visible: boolean;
}

const Loading: React.FunctionComponent<IProps> = React.memo(({ visible }) => {
  const defaultOptions = React.useRef({
    loop: true,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  return (
    <LoadingBlock visible={visible}>
      <LoadingWrap>
        <Lottie options={defaultOptions.current} />
      </LoadingWrap>
    </LoadingBlock>
  );
});

export default Loading;
