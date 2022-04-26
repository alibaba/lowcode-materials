import { Input as OriginalInput } from 'antd';
import { withWrap } from '../../utils/hoc';

const {
  Group: OriginalGroup,
  TextArea: OriginalTextArea,
  Password: OriginalPassword,
  Search: OriginalSearch,
} = OriginalInput;

const Input = withWrap(OriginalInput);

(Input as any).Group = OriginalGroup;
(Input as any).TextArea = withWrap(OriginalTextArea);
(Input as any).Password = withWrap(OriginalPassword);
(Input as any).Search = withWrap(OriginalSearch);

export default Input;