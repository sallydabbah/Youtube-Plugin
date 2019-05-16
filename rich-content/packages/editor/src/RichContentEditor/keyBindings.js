import { KeyBindingUtil, getDefaultKeyBinding } from '@wix/draft-js';
import isEqual from 'lodash/isEqual';
import { COMMANDS, MODIFIERS } from 'wix-rich-content-common';

const COMMAND_BY_SHORTCUT = [
  {
    command: COMMANDS.TITLE,
    modifiers: [MODIFIERS.COMMAND, MODIFIERS.SHIFT],
    key: '1',
  },
  {
    command: COMMANDS.SUBTITLE,
    modifiers: [MODIFIERS.COMMAND, MODIFIERS.SHIFT],
    key: '2',
  },
  {
    command: COMMANDS.ALIGN_LEFT,
    modifiers: [MODIFIERS.COMMAND],
    key: 'l',
  },
  {
    command: COMMANDS.ALIGN_RIGHT,
    modifiers: [MODIFIERS.COMMAND],
    key: 'r',
  },
  {
    command: COMMANDS.ALIGN_CENTER,
    modifiers: [MODIFIERS.COMMAND],
    key: 'e',
  },
  {
    command: COMMANDS.JUSTIFY,
    modifiers: [MODIFIERS.COMMAND],
    key: 'j',
  },
  {
    command: COMMANDS.NUMBERED_LIST,
    modifiers: [MODIFIERS.COMMAND],
    key: 'm',
  },
  {
    command: COMMANDS.BULLET_LIST,
    modifiers: [MODIFIERS.COMMAND, MODIFIERS.SHIFT],
    key: 'l',
  },
  {
    command: COMMANDS.CODE,
    modifiers: [MODIFIERS.COMMAND, MODIFIERS.SHIFT],
    key: '8',
  },
  {
    command: COMMANDS.BLOCKQUOTE,
    modifiers: [MODIFIERS.COMMAND, MODIFIERS.SHIFT],
    key: '9',
  },
];

const { hasCommandModifier, isCtrlKeyCommand, isOptionKeyCommand } = KeyBindingUtil;

function getModifiers(e) {
  return [
    ...(hasCommandModifier(e) ? [MODIFIERS.COMMAND] : []),
    ...(isCtrlKeyCommand(e) ? [MODIFIERS.CTRL] : []),
    ...(isOptionKeyCommand(e) ? [MODIFIERS.OPTION] : []),
    ...(e.shiftKey ? [MODIFIERS.SHIFT] : []),
  ];
}

function getCommandByShortcut(shortcut, bindingMap) {
  if (!shortcut) {
    return null;
  }

  const commands = bindingMap
    .filter(mapped => mapped.key === shortcut.key && isEqual(mapped.modifiers, shortcut.modifiers))
    .map(mapped => mapped.command);

  return commands.length > 0 ? commands[0] : null;
}

export const keyBindingFn = customCommands => {
  const bindingMap = [...COMMAND_BY_SHORTCUT, ...customCommands];
  return e => {
    const shortcut = { modifiers: getModifiers(e), key: e.key };
    return getCommandByShortcut(shortcut, bindingMap) || getDefaultKeyBinding(e);
  };
};

// merges all plugin TextButton keyBindings into an object { commands: [{ cmd1 }, ...], commandHandlers: { cmd1: handler1, ... } }
export const initPluginKeyBindings = pluginTextButtons =>
  pluginTextButtons.reduce(
    (bindings, buttonData, i) => {
      if (buttonData) {
        // iterate each button
        const buttonBindings = Object.keys(buttonData).reduce(
          (buttonBindings, key) => {
            if (buttonData[key].keyBindings && buttonData[key].keyBindings.length > 0) {
              // array of commands per button
              const buttonCommands = buttonData[key].keyBindings.map(binding => ({
                ...binding.keyCommand,
                // avoid cross-plugin name collisions
                command: `${binding.keyCommand.command}_${i}`,
              }));
              // handlers per button
              const buttonCommandHandlers = {};
              buttonData[key].keyBindings.forEach(binding => {
                Object.assign(buttonCommandHandlers, {
                  [`${binding.keyCommand.command}_${i}`]: binding.commandHandler,
                });
              });
              // merge all button commands and handlers
              return {
                commands: [...buttonBindings.commands, ...buttonCommands],
                commandHandlers: { ...buttonBindings.commandHandlers, ...buttonCommandHandlers },
              };
            }
            return buttonBindings;
          },
          { commands: [], commandHandlers: {} }
        );
        // merge all commands and handlers
        return {
          commands: [...bindings.commands, ...buttonBindings.commands],
          commandHandlers: { ...bindings.commandHandlers, ...buttonBindings.commandHandlers },
        };
      }
      return bindings;
    },
    { commands: [], commandHandlers: {} }
  );
