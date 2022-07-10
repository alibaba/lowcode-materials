import { IProps } from '../../types';

import { operationProps } from '../../common';
import FormItemProps from './form-item-props';
import FormBaseProps from './form-base-props';

export { FormItemProps, FormBaseProps };

const props: IProps[] = [...FormBaseProps, ...operationProps];

export default props;
