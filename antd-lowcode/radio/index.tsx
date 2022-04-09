import { Radio as OriginalRadio } from 'antd';
import { withWrap } from '../_utils/hoc';

const Radio = withWrap(OriginalRadio);
(Radio as any).Group = OriginalRadio.Group;

export default Radio;
