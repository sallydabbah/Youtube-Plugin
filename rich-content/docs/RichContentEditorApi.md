# RichContentEditor API

## Introduction

This document describes the `RichContentEditor` API.

## `handleReturn`

The `handleReturn` prop determines editor behavior upon Enter key press.

The prop value is expected to be a function with the following signature:

```javascript

(updateEditorStateCallback: Function) =>
  (e: SyntheticKeyboardEvent, editorState: EditorState) => 'handled' | 'not-handled'

```

The `updateEditorStateCallback` parameter can be used for `editorState` update. It accepts a single parameter `editorState`.

The return value is a function that is used as the `draft-js` [handleReturn cancellable handler](https://draftjs.org/docs/api-reference-editor#handlereturn). It should return either `handled` or `not-handled` string. The `'handled'` value indicates that the event is handled and the Draft core should do nothing more with it. By returning `'not-handled'`, you defer to Draft to handle the event. For example, the `() => 'handled'` will cause the editor to completely ignore the Enter key press.

## `config`

The `config` prop allow to customize various aspects of the `RichContentEditor`, such as [toolbars](./ToolbarCustomization.md), [common UI settings](./UiSettings.md), and [plugins](./PluginCustomization.md).
