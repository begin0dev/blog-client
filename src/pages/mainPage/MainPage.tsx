import { useToast } from '../../components/common';

function MainPage() {
  const { addToast } = useToast();

  return (
    <div>
      main
      <button
        type="button"
        onClick={() =>
          addToast({
            message: 'test asfsadfasdfasdf dsfasd fasdf asfdsadf asd',
          })
        }
      >
        add
      </button>
    </div>
  );
}

export default MainPage;
