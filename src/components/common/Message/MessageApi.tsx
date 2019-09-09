import Message from './Message';

Message.newInstance({ zIndex: 10000, isBottom: true, position: 'right' }, (instance: any) => {
  console.log(instance);
});
