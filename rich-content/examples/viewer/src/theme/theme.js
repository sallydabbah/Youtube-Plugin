import richContentViewerTheme from './viewer-example-app.theme.scss';
import linkTheme from './text-link.theme.scss';
import pluginLinkTheme from './plugin-link.theme.scss';
import hashtagTheme from './text-hashtag.theme.scss';

import dividerTheme from './divider.theme.scss';
import htmlTheme from './html.theme.scss';
import imageTheme from './image.theme.scss';
import videoTheme from './video.theme.scss';
import mentionsTheme from './mentions.theme.scss';

import commonTheme from './global.theme.scss';
import loaderTheme from './loader.theme.scss';
import tooltipTheme from './tooltip.theme.scss';

const modalTheme = {
  content: {},
};

const theme = {
  modalTheme,
  ...richContentViewerTheme,
  ...linkTheme,
  ...pluginLinkTheme,
  ...hashtagTheme,

  // plugin components
  ...dividerTheme,
  ...htmlTheme,
  ...imageTheme,
  ...videoTheme,
  ...mentionsTheme,

  // common
  ...commonTheme,
  ...loaderTheme,
  ...tooltipTheme,
};

export default theme;
