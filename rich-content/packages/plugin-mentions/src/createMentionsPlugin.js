import { createBasePlugin, mergeStyles, decorateComponentWithProps } from 'wix-rich-content-common';
import createMentionPlugin from 'draft-js-mention-plugin';
import { DEFAULT_SETTINGS } from './defaultSettings';
import { EXTERNAL_MENTIONS_TYPE } from './types';
import { positionSuggestions } from './positionSuggestions';
import MentionComponent from './MentionComponent';
import MentionSuggestionsWrapper from './MentionSuggestionsWrapper';
import Styles from '../statics/mentions.scss';

/*
Interface Mention {
  name: string;
  slug: string;
  avatar?: string;
}

Interface Settings {
  mentionPrefix?: string;
  mentionTrigger?: string;
  getMentionLink?: (mention: Mention) => string;
  getMentions: (search: string) => Promise<Mention[]>
  onMentionClick: (mention: Mention) => void;
  repositionSuggestions: boolean, // when you are in iframe and want suggestions to be repositioned if they go out of iframe
  entryHeight: number, // suggestion entry height
  additionalHeight: number, // extra spacing in suggestion popup
}
*/

const createExternalMentionsPlugin = (config = {}) => {
  const type = EXTERNAL_MENTIONS_TYPE;
  const { theme, [type]: mentionSettings = {}, ...rest } = config;
  const styles = mergeStyles({ styles: Styles, theme });
  const settings = Object.assign({}, DEFAULT_SETTINGS, mentionSettings);

  const plugin = createMentionPlugin({
    mentionComponent: decorateComponentWithProps(MentionComponent, { settings }),
    theme: styles,
    mentionPrefix: settings.mentionPrefix,
    mentionTrigger: settings.mentionTrigger,
    positionSuggestions: positionSuggestions({
      entryHeight: settings.entryHeight,
      additionalHeight: settings.additionalHeight,
      reposition: settings.repositionSuggestions,
    }),
  });

  const inlineModals = [
    decorateComponentWithProps(MentionSuggestionsWrapper, {
      component: plugin.MentionSuggestions,
      settings,
    }),
  ];

  return createBasePlugin(
    {
      theme,
      type,
      inlineModals,
      settings,
      ...rest,
    },
    plugin
  );
};

export { createExternalMentionsPlugin };
