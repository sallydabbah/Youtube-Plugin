import { createLinkPlugin } from 'wix-rich-content-plugin-link';
import { createHashtagPlugin } from 'wix-rich-content-plugin-hashtag';
// import { createExternalEmojiPlugin } from 'wix-rich-content-plugin-emoji';
import { createImagePlugin } from 'wix-rich-content-plugin-image';
import { createVideoPlugin } from 'wix-rich-content-plugin-video';
import { createYoutubePlugin } from 'wix-rich-content-plugin-youtube';
import { createHtmlPlugin } from 'wix-rich-content-plugin-html';
import { createDividerPlugin } from 'wix-rich-content-plugin-divider';
import { createExternalMentionsPlugin } from 'wix-rich-content-plugin-mentions';
import { createCodeBlockPlugin } from 'wix-rich-content-plugin-code-block';
import { createSoundCloudPlugin } from 'wix-rich-content-plugin-sound-cloud';
import { createButtonPlugin } from 'wix-rich-content-plugin-button';
import { createGiphyPlugin } from 'wix-rich-content-plugin-giphy';
import { createHeadersMarkdownPlugin } from 'wix-rich-content-plugin-headers-markdown';
import { createMapPlugin } from 'wix-rich-content-plugin-map';
//import { createTextColorPlugin } from 'wix-rich-content-plugin-text-color';
import { createFileUploadPlugin } from 'wix-rich-content-plugin-file-upload';

import 'wix-rich-content-common/dist/styles.min.css';
import 'wix-rich-content-editor/dist/styles.min.css';
// import 'wix-rich-content-plugin-code-block/dist/styles.min.css';
import 'wix-rich-content-plugin-divider/dist/styles.min.css';
// import 'wix-rich-content-plugin-emoji/dist/styles.min.css';
import 'wix-rich-content-plugin-html/dist/styles.min.css';
import 'wix-rich-content-plugin-hashtag/dist/styles.min.css';
import 'wix-rich-content-plugin-link/dist/styles.min.css';
import 'wix-rich-content-plugin-mentions/dist/styles.min.css';
import 'wix-rich-content-plugin-image/dist/styles.min.css';
import 'wix-rich-content-plugin-video/dist/styles.min.css';
import 'wix-rich-content-plugin-youtube/dist/styles.min.css';
import 'wix-rich-content-plugin-sound-cloud/dist/styles.min.css';
import 'wix-rich-content-plugin-button/dist/styles.min.css';
import 'wix-rich-content-plugin-giphy/dist/styles.min.css';
import 'wix-rich-content-plugin-map/dist/styles.min.css';
import 'wix-rich-content-plugin-file-upload/dist/styles.min.css';

const plugins = [
  createImagePlugin,
  createVideoPlugin,
  createHtmlPlugin,
  createDividerPlugin,
  // createExternalEmojiPlugin,
  createLinkPlugin,
  createHashtagPlugin,
  createExternalMentionsPlugin,
  createCodeBlockPlugin,
  createSoundCloudPlugin,
  createButtonPlugin,
  createGiphyPlugin,
  createHeadersMarkdownPlugin,
  createMapPlugin,
 //createTextColorPlugin,
  createFileUploadPlugin,
  createYoutubePlugin
];

export default plugins;
