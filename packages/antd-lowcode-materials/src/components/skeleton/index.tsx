import { Skeleton as OriginalSleleton } from 'antd';
import { withSingleChild } from '../../utils/hoc';

const Skeleton = withSingleChild(OriginalSleleton, ['children']);
export default Skeleton;
