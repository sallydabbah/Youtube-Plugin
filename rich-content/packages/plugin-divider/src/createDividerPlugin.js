import { createBasePlugin, mergeStyles } from 'wix-rich-content-common';

import { DIVIDER_TYPE } from './constants';
import DividerComponent from './components/divider-component';
import createToolbar from './toolbar';
import Styles from '../statics/styles/default-styles.scss';

const createDividerPlugin = (config = {}) => {
  const type = DIVIDER_TYPE;
  const { helpers, theme, t, [type]: settings = {}, ...rest } = config;
  const styles = mergeStyles({ styles: Styles, theme });
  return createBasePlugin({
    component: DividerComponent,
    settings,
    theme,
    type,
    toolbar: createToolbar({
      helpers,
      styles,
      theme,
      t,
    }),
    helpers,
    t,
    ...rest,
  });
};

export { createDividerPlugin, DIVIDER_TYPE };
