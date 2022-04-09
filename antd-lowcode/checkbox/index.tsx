import { Checkbox as OriginalCheckbox } from 'antd';
import { withWrap } from '../_utils/hoc';

const Checkbox = withWrap(OriginalCheckbox);
(Checkbox as any).Group = OriginalCheckbox.Group;

export default Checkbox;
