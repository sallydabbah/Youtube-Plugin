import { EditorState, RichUtils, Modifier } from '@wix/draft-js';
import { isAtomicBlockFocused, removeBlock, COMMANDS } from 'wix-rich-content-common';

export default (updateEditorState, customHandlers) => (command, editorState) => {
  let newState, contentState;
  if (customHandlers[command]) {
    newState = customHandlers[command](editorState);
  } else {
    switch (command) {
      case COMMANDS.ALIGN_RIGHT:
      case COMMANDS.ALIGN_LEFT:
      case COMMANDS.ALIGN_CENTER:
      case COMMANDS.JUSTIFY:
        contentState = Modifier.mergeBlockData(
          editorState.getCurrentContent(),
          editorState.getSelection(),
          { textAlignment: command }
        );
        newState = EditorState.push(editorState, contentState, 'change-block-data');
        break;
      case COMMANDS.TITLE:
      case COMMANDS.SUBTITLE:
      case COMMANDS.NUMBERED_LIST:
      case COMMANDS.BULLET_LIST:
      case COMMANDS.BLOCKQUOTE:
      case COMMANDS.CODE:
        newState = RichUtils.toggleBlockType(editorState, command);
        break;
      case COMMANDS.BACKSPACE:
      case COMMANDS.DELETE:
        if (isAtomicBlockFocused(editorState)) {
          newState = removeBlock(editorState, editorState.getSelection().getAnchorKey());
        }
        break;
      default:
        newState = RichUtils.handleKeyCommand(editorState, command);
        break;
    }
  }

  if (newState) {
    updateEditorState(newState);
    return 'handled';
  }

  return 'not-handled';
};
