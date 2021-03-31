import { create } from '@storybook/theming';
import brandLogo from './assets/brandLogo.svg';

export default create({
  base: 'light',
  brandUrl: '/',
  brandImage: brandLogo,
});