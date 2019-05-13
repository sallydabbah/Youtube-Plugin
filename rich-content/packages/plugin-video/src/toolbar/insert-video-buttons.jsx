import { DEFAULTS } from '../video-component';
import {
  getModalStyles,
  TOOLBARS,
  decorateComponentWithProps,
  WixUtils,
} from 'wix-rich-content-common';
import VideoSelectionInputModal from './videoSelectionInputModal';
import { InsertPluginIcon } from '../icons';
import {
  SelectionModalCustomStyle,
  ExtendedSelectionModalCustomStyle,
} from './selectionModalCustomStyles';

export default ({ helpers, t, settings }) => {
  return [
    {
      type: 'modal',
      name: 'Video',
      tooltipText: t('VideoPlugin_InsertButton_Tooltip'),
      Icon: InsertPluginIcon,
      componentData: DEFAULTS,
      toolbars: [TOOLBARS.FOOTER, TOOLBARS.SIDE],
      modalElement: decorateComponentWithProps(VideoSelectionInputModal, settings),
      modalStyles: getModalStyles({
        //apply the extended input modal styles if handleFileSelection is avilable in plugin config
        //& on mobile if enableCustomUploadOnMobile is set to true, otherwise the normal modal styles is applied
        customStyles:
          (!WixUtils.isMobile() || settings.enableCustomUploadOnMobile) &&
          settings.handleFileSelection
            ? ExtendedSelectionModalCustomStyle
            : SelectionModalCustomStyle,
        fullScreen: false,
      }),
      helpers,
    },
  ];
};
