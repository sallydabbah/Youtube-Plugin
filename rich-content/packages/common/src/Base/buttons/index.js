import createBlockButton from './createBlockButton';
import createBlockAlignmentButton from './createBlockAlignmentButton';
import createBlockAlignmentAndSizeButton from './createBlockAlignmentAndSizeButton';
import createBlockSizeButton from './createBlockSizeButton';
import createSliderPanelButton from './createSliderPanelButton';
import BUTTONS from './keys';
import BlockLinkButton from '../buttons/BlockLinkButton';
import {
  SizeSmallIcon,
  SizeMediumIcon,
  SizeLargeIcon,
  SizeOriginalIcon,
  SizeSmallCenterIcon,
  SizeSmallLeftIcon,
  SizeSmallRightIcon,
  SizeBestFitIcon,
  SizeFullWidthIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  WidthIcon,
  HeightIcon,
  TrashIcon,
} from '../../Icons';

export { BUTTONS };

export { BlockLinkButton };

export const SizeSmallButton = createBlockSizeButton({
  size: 'small',
  Icon: SizeSmallIcon,
  tooltipTextKey: 'SizeSmallButton_Tooltip',
});

export const SizeMediumButton = createBlockSizeButton({
  size: 'medium',
  Icon: SizeMediumIcon,
  tooltipTextKey: 'SizeMediumButton_Tooltip',
});

export const SizeLargeButton = createBlockSizeButton({
  size: 'large',
  Icon: SizeLargeIcon,
  tooltipTextKey: 'SizeLargeButton_Tooltip',
});

export const AlignmentLeftButton = createBlockAlignmentButton({
  alignment: 'left',
  Icon: AlignLeftIcon,
  tooltipTextKey: 'AlignTextLeftButton_Tooltip',
});

export const AlignmentCenterButton = createBlockAlignmentButton({
  alignment: 'center',
  Icon: AlignCenterIcon,
  tooltipTextKey: 'AlignTextCenterButton_Tooltip',
});

export const AlignmentRightButton = createBlockAlignmentButton({
  alignment: 'right',
  Icon: AlignRightIcon,
  tooltipTextKey: 'AlignTextRightButton_Tooltip',
});

export const SizeOriginalButton = createBlockAlignmentAndSizeButton({
  size: 'original',
  alignment: 'left',
  Icon: SizeOriginalIcon,
  tooltipTextKey: 'SizeOriginalButton_Tooltip',
});

export const SizeSmallCenterButton = createBlockAlignmentAndSizeButton({
  size: 'small',
  alignment: 'center',
  Icon: SizeSmallCenterIcon,
  tooltipTextKey: 'SizeSmallCenterButton_Tooltip',
});

export const SizeSmallLeftButton = createBlockAlignmentAndSizeButton({
  size: 'small',
  alignment: 'left',
  Icon: SizeSmallLeftIcon,
  tooltipTextKey: 'SizeSmallLeftButton_Tooltip',
});

export const SizeSmallRightButton = createBlockAlignmentAndSizeButton({
  size: 'small',
  alignment: 'right',
  Icon: SizeSmallRightIcon,
  tooltipTextKey: 'SizeSmallRightButton_Tooltip',
});

export const SizeContentButton = createBlockAlignmentAndSizeButton({
  size: 'content',
  alignment: 'center',
  Icon: SizeBestFitIcon,
  tooltipTextKey: 'SizeContentButton_Tooltip',
});

export const SizeFullWidthButton = createBlockAlignmentAndSizeButton({
  size: 'fullWidth',
  alignment: 'center',
  Icon: SizeFullWidthIcon,
  tooltipTextKey: 'SizeFullWidthButton_Tooltip',
});

export const DeleteButton = createBlockButton({
  Icon: TrashIcon,
  tooltipTextKey: 'DeleteButton_Tooltip',
});

export const WidthButton = createSliderPanelButton({
  Icon: WidthIcon,
  tooltipTextKey: 'WidthButton_Tooltip',
  getValue: ({ componentData }) => componentData.config.width,
  onChange: ({ store }) => width => {
    const bounds = store.get('editorBounds');
    const editorWidth = bounds ? bounds.width : 740;
    if (width >= editorWidth && store.get('componentAlignment')) {
      store.set('componentAlignment', 'center');
    }

    store.update('componentData', { config: { width } });
  },
});

export const HeightButton = createSliderPanelButton({
  Icon: HeightIcon,
  tooltipTextKey: 'HeightButton_Tooltip',
  getValue: ({ componentData }) => componentData.config.height,
  onChange: ({ store }) => height => store.update('componentData', { config: { height } }),
});

export const BUTTONS_BY_KEY = {
  [BUTTONS.SIZE_SMALL]: SizeSmallButton,
  [BUTTONS.SIZE_MEDIUM]: SizeMediumButton,
  [BUTTONS.SIZE_LARGE]: SizeLargeButton,
  [BUTTONS.SIZE_ORIGINAL]: SizeOriginalButton,
  [BUTTONS.SIZE_CONTENT]: SizeContentButton,
  [BUTTONS.SIZE_FULL_WIDTH]: SizeFullWidthButton,
  [BUTTONS.SIZE_SMALL_LEFT]: SizeSmallLeftButton,
  [BUTTONS.SIZE_SMALL_CENTER]: SizeSmallCenterButton,
  [BUTTONS.SIZE_SMALL_RIGHT]: SizeSmallRightButton,
  [BUTTONS.ALIGNMENT_LEFT]: AlignmentLeftButton,
  [BUTTONS.ALIGNMENT_CENTER]: AlignmentCenterButton,
  [BUTTONS.ALIGNMENT_RIGHT]: AlignmentRightButton,
  [BUTTONS.WIDTH]: WidthButton,
  [BUTTONS.HEIGHT]: HeightButton,
};
