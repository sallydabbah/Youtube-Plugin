import YoutubeViewer from './youtube-viewer';
import { VIDEO_TYPE_LEGACY, VIDEO_TYPE } from './types';
import { containerClassName } from './classNameStrategies';

export const typeMapper = () => ({
  [VIDEO_TYPE_LEGACY]: {
    component: YoutubeViewer,
    classNameStrategies: { container: containerClassName },
  },
  [VIDEO_TYPE]: { component: YoutubeViewer, classNameStrategies: { container: containerClassName } },
});
