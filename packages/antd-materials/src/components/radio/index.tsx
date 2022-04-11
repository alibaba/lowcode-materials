import { Radio as OriginalRadio } from 'antd';
import { withWrap } from '../../utils/hoc';

const Radio = withWrap(OriginalRadio);
(Radio as any).Group = OriginalRadio.Group;

export default Radio;
