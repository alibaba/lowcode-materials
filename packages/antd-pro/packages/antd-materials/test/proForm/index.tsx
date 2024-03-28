import { ProForm as OriginalProForm } from '@ant-design/pro-components';

import { withWrap } from '../../src/utils/hoc';


const {
  Group: OriginalGroup,
} = OriginalProForm;

const ProForm = withWrap(OriginalProForm);

(ProForm as any).Group = OriginalGroup;


export default ProForm;