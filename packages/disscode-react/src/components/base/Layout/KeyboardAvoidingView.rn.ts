import { KeyboardAvoidingView, Platform } from 'react-native';

export const isIos = () => {
  return Platform.OS === 'ios';
}

export default KeyboardAvoidingView;