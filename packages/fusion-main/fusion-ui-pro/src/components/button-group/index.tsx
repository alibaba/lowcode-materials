import { withGlobal } from '@/provider';
import { ButtonGroup as PureButtonGroup, ButtonGroupProps } from './ButtonGroup';

export const ButtonGroup = withGlobal(PureButtonGroup, {
  i18nBundleName: 'ButtonGroup',
});
export { ButtonGroupProps };
