import { Checkbox as OriginalCheckbok } from 'antd';
import { withWrap } from '../../utils/hoc';

const Checkbox = withWrap(OriginalCheckbok);
(Checkbox as any).Group = OriginalCheckbok.Group;

export default Checkbox;
