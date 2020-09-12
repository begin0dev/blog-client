import * as React from 'react';
import { useContext } from 'react';

import { MessageContext } from 'lib/Message';

function MainPage(): JSX.Element {
  const { addMessage } = useContext(MessageContext);

  return (
    <div>
      main
      <button type="button" onClick={() => addMessage('test')}>
        test
      </button>
    </div>
  );
}

export default MainPage;
