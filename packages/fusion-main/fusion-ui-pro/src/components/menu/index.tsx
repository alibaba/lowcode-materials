import { withGlobal } from '@/provider';
import { Menu as PureMenu } from './Menu';

export const Menu = withGlobal(PureMenu, {
  i18nBundleName: 'Menu',
});
export { MenuProps, MenuItemProps } from './Menu';
