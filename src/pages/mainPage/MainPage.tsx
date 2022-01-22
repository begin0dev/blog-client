import useToast from '../../components/common/toast/useToast';
import { ToastType } from '../../components/common/toast/types';

function MainPage() {
  const { addToast } = useToast();

  return (
    <div>
      main
      <button onClick={() => addToast({ type: ToastType.SUCCESS, message: 'aaaaaaaaaa' })}>
        aaaaa
      </button>
    </div>
  );
}

export default MainPage;
