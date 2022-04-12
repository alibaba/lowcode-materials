import { Upload as OriginalUpload } from 'antd';
import { withSingleChild } from '../../utils/hoc';

const Upload = withSingleChild(OriginalUpload, ['children']);
export default Upload;
