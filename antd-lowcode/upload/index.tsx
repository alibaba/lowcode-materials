import { Upload as OriginalUpload } from 'antd';
import { withSingleChild } from '../_utils/hoc';

const Upload = withSingleChild(OriginalUpload, ['children']);
export default Upload;
