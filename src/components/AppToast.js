import { Toast } from 'native-base';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dismissMessage } from '../actions/message';

function AppToast() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.message);

  useEffect(() => {
    if (message !== null) {
      Toast.show({
        text: message?.text,
        buttonText: 'close',
        type: message?.type,
        duration: 3000,
        position: 'top',
        onClose: () => dispatch(dismissMessage()),
      });
    }
  }, [dispatch, message]);
  return null;
}

export default AppToast;
