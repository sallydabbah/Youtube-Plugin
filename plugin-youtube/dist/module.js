import { isVideoUrl, mergeStyles, WixUtils, CloseIcon, TextInput, Button, BUTTONS, decorateComponentWithProps, getModalStyles, Context, validate, TOOLBARS, createBasePlugin } from 'wix-rich-content-common';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM, { findDOMNode } from 'react-dom';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import ReactPlayer from 'react-player';
import isEqual from 'lodash/isEqual';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

var InsertPluginIcon = function InsertPluginIcon(props) {
  return React.createElement("svg", _extends_1({
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 19 19"
  }, props), React.createElement("defs", null, React.createElement("path", {
    id: "video-icon-path",
    d: "M14 7l2.842-1.421A.8.8 0 0 1 18 6.294v6.412a.8.8 0 0 1-1.158.715L14 12v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2zm0 3.9l2.708 1.354a.2.2 0 0 0 .29-.179V6.922a.2.2 0 0 0-.29-.178L14 8.098V10.9zM2 5v9h11V5H2z"
  })), React.createElement("g", {
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "video-icon-mask"
  }, React.createElement("use", {
    xlinkHref: "#video-icon-path"
  })), React.createElement("use", {
    fillRule: "nonzero",
    xlinkHref: "#video-icon-path"
  })));
};

var MediaReplaceIcon = function MediaReplaceIcon(props) {
  return React.createElement("svg", _extends_1({
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 19,
    height: 19,
    viewBox: "0 0 19 19"
  }, props), React.createElement("defs", null, React.createElement("path", {
    id: "replace-path",
    d: "M3 7.8V3.2c0-.11.09-.2.2-.2h.6c.11 0 .2.09.2.2v2.592A6.607 6.607 0 0 1 9.412 3C13.05 3 16 5.91 16 9.5c0 .168-.006.335-.02.5h-1.016a5.51 5.51 0 0 0 .022-.5c0-3.038-2.495-5.5-5.574-5.5a5.583 5.583 0 0 0-4.967 3H7.8c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2H3.2a.2.2 0 0 1-.2-.2zm13 3.4v4.6a.2.2 0 0 1-.2.2h-.6a.2.2 0 0 1-.2-.2v-2.592A6.607 6.607 0 0 1 9.588 16C5.95 16 3 13.09 3 9.5c0-.168.006-.335.02-.5h1.016a5.496 5.496 0 0 0-.022.5c0 3.038 2.495 5.5 5.574 5.5a5.583 5.583 0 0 0 4.967-3H11.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h4.6c.11 0 .2.09.2.2z"
  })), React.createElement("g", {
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "replace-mask"
  }, React.createElement("use", {
    xlinkHref: "#replace-path"
  })), React.createElement("use", {
    fillRule: "nonzero",
    xlinkHref: "#replace-path"
  })));
};

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

var styles = {"video_modal_container_big":"video-selection-input-modal__video_modal_container_big___sLONb","video_modal_container_small":"video-selection-input-modal__video_modal_container_small___18u4O","video_modal_closeIcon":"video-selection-input-modal__video_modal_closeIcon___3BzR_","video_modal_errorIcon":"video-selection-input-modal__video_modal_errorIcon___1lPzP","video_modal_header":"video-selection-input-modal__video_modal_header___IOhY_","video_modal_header_text":"video-selection-input-modal__video_modal_header_text___1_rt3","video_modal_textInput_customWidth":"video-selection-input-modal__video_modal_textInput_customWidth___30hZe","video_modal_textInput_fullWidth":"video-selection-input-modal__video_modal_textInput_fullWidth___3kvd5","video_modal_add_a_Video":"video-selection-input-modal__video_modal_add_a_Video___CbSVa","video_modal_or_upload_video_from":"video-selection-input-modal__video_modal_or_upload_video_from___1iil1","video_modal_upload_video":"video-selection-input-modal__video_modal_upload_video___2wwIl","video_modal_add_button_inline":"video-selection-input-modal__video_modal_add_button_inline___1Q8G6","video_modal_add_button_inMiddle":"video-selection-input-modal__video_modal_add_button_inMiddle___JdQNo","video_modal_error_msg":"video-selection-input-modal__video_modal_error_msg___3YRoW","textInput_input":"video-selection-input-modal__textInput_input___2UVNP","textInput_input_invalid":"video-selection-input-modal__textInput_input_invalid___1ECnT"};

var YoutubeSelectionInputModal =
/*#__PURE__*/
function (_Component) {
  inheritsLoose(YoutubeSelectionInputModal, _Component);

  function YoutubeSelectionInputModal(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.onUrlChange = function (e) {
      var url = e.target.value;

      _this.setState({
        url: url
      });
    };

    _this.afterOpenModal = function () {
      return _this.input.focus();
    };

    _this.onConfirm = function () {
      var _this$state = _this.state,
          url = _this$state.url,
          pathname = _this$state.pathname,
          thumbnail = _this$state.thumbnail,
          isCustomVideo = _this$state.isCustomVideo;
      var src = pathname.length ? {
        pathname: pathname,
        thumbnail: thumbnail
      } : url;

      if (isVideoUrl(url) || isCustomVideo) {
        var _this$props = _this.props,
            componentData = _this$props.componentData,
            helpers = _this$props.helpers,
            pubsub = _this$props.pubsub,
            onConfirm = _this$props.onConfirm;

        if (onConfirm) {
          onConfirm(_extends_1({}, componentData, {
            src: src,
            isCustomVideo: _this.state.isCustomVideo
          }));
        } else {
          pubsub.update('componentData', {
            src: src,
            isCustomVideo: _this.state.isCustomVideo
          });
        }

        if (helpers && helpers.onVideoSelected) {
          helpers.onVideoSelected(src, function (data) {
            return pubsub.update('componentData', {
              metadata: _extends_1({}, data)
            });
          });
        }

        _this.onCloseRequested();
      } else {
        _this.setState({
          submitted: true
        });
      }
    };

    _this.handleCustomVideoUpload = function (_ref) {
      var data = _ref.data,
          error = _ref.error;

      if (error) {
        _this.setState({
          errorMsg: error.msg
        });
      } else {
        if (data.pathname) {
          _this.setState({
            url: '',
            pathname: data.pathname,
            thumbnail: data.thumbnail,
            isCustomVideo: true
          });
        } else {
          _this.setState({
            url: data.url,
            pathname: '',
            isCustomVideo: true
          });
        }

        _this.onConfirm();
      }
    };

    _this.onCloseRequested = function () {
      _this.setState({
        isOpen: false
      });

      _this.props.helpers.closeModal();
    };

    _this.handleKeyPress = function (e) {
      if (e.charCode === 13) {
        _this.onConfirm();
      }
    };

    _this.styles = mergeStyles({
      styles: styles,
      theme: props.theme
    });
    var _componentData = _this.props.componentData;
    _this.state = {
      url: !_componentData.isCustomVideo && _componentData.src || '',
      pathname: '',
      thumbnail: {
        pathname: '',
        width: 0,
        height: 0
      },
      isCustomVideo: false,
      errorMsg: ''
    };
    return _this;
  }

  var _proto = YoutubeSelectionInputModal.prototype;

  //These two function needed to handle onFocus select for iphone devices
  _proto.componentDidMount = function componentDidMount() {
    this.input.focus();
    this.input.setSelectionRange(0, this.input.value.length);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state2 = this.state,
        url = _this$state2.url,
        submitted = _this$state2.submitted,
        errorMsg = _this$state2.errorMsg;
    var _this$props2 = this.props,
        t = _this$props2.t,
        handleFileSelection = _this$props2.handleFileSelection,
        enableCustomUploadOnMobile = _this$props2.enableCustomUploadOnMobile;
    var styles = this.styles;
    var uploadVideoSection = React.createElement("div", null, React.createElement("div", {
      className: styles.video_modal_or_upload_video_from
    }, t('VideoUploadModal_CustomVideoHeader')), React.createElement("div", {
      className: styles.video_modal_upload_video
    }, React.createElement("div", {
      role: "button",
      onClick: function onClick() {
        return handleFileSelection(function (_ref2) {
          var data = _ref2.data,
              error = _ref2.error;
          return _this2.handleCustomVideoUpload({
            data: data,
            error: error
          });
        }, function () {
          return _this2.onCloseRequested();
        });
      },
      tabIndex: 0,
      onKeyDown: function onKeyDown() {
        return handleFileSelection(function (_ref3) {
          var data = _ref3.data,
              error = _ref3.error;
          return _this2.handleCustomVideoUpload({
            data: data,
            error: error
          });
        });
      }
    }, "+ ", t('VideoUploadModal_CustomVideoClickText')), errorMsg.length > 0 && React.createElement("div", {
      className: styles.video_modal_error_msg
    }, errorMsg)));
    return React.createElement("div", null, React.createElement("div", {
      className: styles["video_modal_container_" + (handleFileSelection ? 'big' : 'small')],
      "data-hook": "videoUploadModal"
    }, !WixUtils.isMobile() && React.createElement(CloseIcon, {
      className: styles.video_modal_closeIcon,
      onClick: function onClick() {
        return _this2.onCloseRequested();
      }
    }), React.createElement("h2", {
      className: styles.video_modal_add_a_Video
    }, t('VideoUploadModal_Title')), React.createElement("div", {
      role: "heading",
      "aria-labelledby": "video_modal_hdr",
      className: styles.video_modal_header
    }, React.createElement("h3", {
      id: "video_modal_hdr",
      className: styles.video_modal_header_text
    }, t('VideoUploadModal_Header'))), React.createElement("div", null, React.createElement("div", {
      className: styles["video_modal_textInput_" + (handleFileSelection ? 'customWidth' : 'fullWidth')]
    }, React.createElement(TextInput, {
      inputRef: function inputRef(ref) {
        _this2.input = ref;
      },
      type: "url",
      onKeyPress: this.handleKeyPress,
      onChange: this.onUrlChange,
      value: url,
      error: !isVideoUrl(url) && submitted ? t('VideoUploadModal_Input_InvalidUrl') : null,
      placeholder: t('VideoUploadModal_Input_Placeholder'),
      theme: styles,
      "data-hook": "videoUploadModalInput"
    })), React.createElement(Button, {
      className: styles["video_modal_add_button_" + (handleFileSelection ? 'inline' : 'inMiddle')],
      onClick: function onClick() {
        return _this2.onConfirm();
      },
      ariaProps: !this.state.url && {
        disabled: 'disabled'
      }
    }, t('VideoUploadModal_AddButtonText'))), (!WixUtils.isMobile() || enableCustomUploadOnMobile) && handleFileSelection && uploadVideoSection));
  };

  return YoutubeSelectionInputModal;
}(Component);
YoutubeSelectionInputModal.propTypes = {
  onConfirm: PropTypes.func,
  pubsub: PropTypes.object,
  helpers: PropTypes.object.isRequired,
  componentData: PropTypes.object.isRequired,
  url: PropTypes.string,
  theme: PropTypes.object.isRequired,
  doneLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  t: PropTypes.func,
  handleFileSelection: PropTypes.func,
  enableCustomUploadOnMobile: PropTypes.bool
};

var SelectionModalCustomStyle = {
  content: {
    maxWidth: '580px',
    minHeight: '260px'
  }
};
var ExtendedSelectionModalCustomStyle = {
  content: {
    maxWidth: '580px',
    minHeight: '378px'
  }
};

var createInlineButtons = (function (_ref) {
  var t = _ref.t,
      settings = _ref.settings;
  return [{
    keyName: 'sizeSmallCenter',
    type: BUTTONS.SIZE_SMALL_CENTER,
    mobile: false
  }, {
    keyName: 'sizeContent',
    type: BUTTONS.SIZE_CONTENT,
    mobile: false
  }, {
    keyName: 'sizeFullWidth',
    type: BUTTONS.SIZE_FULL_WIDTH,
    mobile: false
  }, {
    keyName: 'separator1',
    type: BUTTONS.SEPARATOR,
    mobile: false
  }, {
    keyName: 'sizeSmallLeft',
    type: BUTTONS.SIZE_SMALL_LEFT,
    mobile: false
  }, {
    keyName: 'sizeSimallRight',
    type: BUTTONS.SIZE_SMALL_RIGHT,
    mobile: false
  }, {
    keyName: 'separator2',
    type: BUTTONS.SEPARATOR,
    mobile: false
  }, {
    keyName: 'replace',
    type: BUTTONS.EXTERNAL_MODAL,
    icon: MediaReplaceIcon,
    modalElement: decorateComponentWithProps(YoutubeSelectionInputModal, settings),
    modalStyles: getModalStyles({
      //apply the extended input modal styles if handleFileSelection is avilable in plugin config
      //& on mobile if enableCustomUploadOnMobile is set to true, otherwise the normal modal styles is applied
      customStyles: (!WixUtils.isMobile() || settings.enableCustomUploadOnMobile) && settings.handleFileSelection ? ExtendedSelectionModalCustomStyle : SelectionModalCustomStyle,
      fullScreen: false
    }),
    mobile: true,
    tooltipTextKey: 'ReplaceVideoButton_Tooltip',
    t: t
  }, {
    keyName: 'delete',
    type: BUTTONS.DELETE,
    mobile: true
  }];
});

var getVideoSrc = function getVideoSrc(src, settings) {
  if (settings === void 0) {
    settings = {};
  }

  if (typeof src === 'object') {
    if (settings && settings.getVideoUrl) {
      return settings.getVideoUrl(src);
    } else {
      console.error('must set getVideoUrl in plugin config when using custom video source!', src); //eslint-disable-line no-console
    }
  }

  return src;
};

var $id = "http://path/to/schema.json";
var type = "object";
var properties = {
	src: {
		oneOf: [
			{
				$id: "/properties/src",
				type: "string",
				title: "Video Source URL",
				"default": "",
				examples: [
					"https://www.youtube.com/watch?v=eqZVIiD6wSg"
				]
			},
			{
				$id: "/properties/src",
				type: "object",
				properties: {
					pathname: {
						$id: "/properties/src/pathname",
						type: "string",
						title: "Video Source Pathname",
						"default": "",
						examples: [
							"video-sample/jellyfish-25-mbps-hd-hevc.mp4"
						]
					},
					thumbnail: {
						$id: "/properties/src/thumbnail",
						type: "object",
						properties: {
							pathname: {
								$id: "/properties/src/thumbnail/pathname",
								type: "string",
								title: "Video Thumbnail Pathname",
								"default": "",
								examples: [
									"media/441c23_84f5c058e5e4479ab9e626cd5560a21bf002.jpg"
								]
							},
							height: {
								$id: "/properties/src/thumbnail/height",
								type: "number",
								title: "Video Thumbnail Height",
								"default": "",
								examples: [
									"1080"
								]
							},
							width: {
								$id: "/properties/src/thumbnail/width",
								type: "number",
								title: "Video Thumbnail Width",
								"default": "",
								examples: [
									"1920"
								]
							}
						}
					}
				}
			}
		]
	},
	isCustomVideo: {
		$id: "/properties/isCustomVideo",
		type: "bool",
		title: "Is Custom Video",
		"default": "false"
	},
	config: {
		$id: "/properties/config",
		type: "object",
		properties: {
			size: {
				$id: "/properties/config/properties/size",
				type: "string",
				title: "Size",
				"default": "large",
				examples: [
					"medium",
					"small",
					"large"
				]
			},
			alignment: {
				$id: "/properties/config/properties/alignment",
				type: "string",
				title: "The Alignment Schema ",
				"default": "center",
				examples: [
					"left",
					"right",
					"center"
				]
			},
			textWrap: {
				$id: "/properties/config/properties/textWrap",
				type: "string",
				title: "The Textwrap Schema ",
				"default": "nowrap",
				examples: [
					"nowrap"
				]
			},
			key: {
				$id: "/properties/config/properties/key",
				type: "string",
				title: "The Key Schema ",
				"default": "",
				examples: [
					"7mib0"
				]
			}
		}
	}
};
var required = [
	"src"
];
var schema = {
	$id: $id,
	type: type,
	properties: properties,
	required: required
};

var styles$1 = {"video_player":"video-viewer__video_player___tHkyM","video_container":"video-viewer__video_container___PRy0-"};

var YoutubeViewer =
/*#__PURE__*/
function (_Component) {
  inheritsLoose(YoutubeViewer, _Component);

  function YoutubeViewer(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.normalizeUrl = function (url) {
      return url.toLowerCase().indexOf('vimeo') === 0 ? 'https://' + url : url;
    };

    _this.getVideoRatio = function (wrapper) {
      var element = wrapper.querySelector('iframe, video');
      return element.clientHeight / element.clientWidth;
    };

    _this.fixVideoRatio = function () {
      // eslint-disable-next-line react/no-find-dom-node
      var wrapper = ReactDOM.findDOMNode(_assertThisInitialized(_this)).parentNode;

      var ratio = _this.getVideoRatio(wrapper);

      wrapper.style['padding-bottom'] = ratio * 100 + '%';
    };

    validate(props.componentData, schema);
    return _this;
  }

  var _proto = YoutubeViewer.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.componentData, this.props.componentData)) {
      validate(nextProps.componentData, schema);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        componentData = _this$props.componentData,
        settings = _this$props.settings,
        rest = objectWithoutPropertiesLoose(_this$props, ["componentData", "settings"]);

    this.styles = this.styles || mergeStyles({
      styles: styles$1,
      theme: this.context.theme
    });
    var url = this.normalizeUrl(getVideoSrc(componentData.src, settings));

    var props = _extends_1({}, rest, {
      url: url,
      onReady: this.fixVideoRatio
    });

    return React.createElement(ReactPlayer, _extends_1({
      className: classNames(this.styles.video_player)
    }, props));
  };

  return YoutubeViewer;
}(Component);

YoutubeViewer.propTypes = {
  componentData: PropTypes.object.isRequired,
  onReady: PropTypes.func,
  onStart: PropTypes.func,
  controls: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  settings: PropTypes.object.isRequired
};
YoutubeViewer.contextType = Context.type;
YoutubeViewer.defaultProps = {
  width: '100%',
  height: '100%',
  controls: true
};

var styles$2 = {"video_player":"default-video-styles__video_player___3eJpx","video_container":"default-video-styles__video_container___2qztm","video_overlay":"default-video-styles__video_overlay___1qGL7","video_overlay_message":"default-video-styles__video_overlay_message___6Ln66"};

var VIDEO_TYPE = 'wix-draft-plugin-youtube';
var VIDEO_TYPE_LEGACY = 'VIDEO-EMBED';

var DEFAULTS = {
  config: {
    size: 'content',
    alignment: 'center'
  }
};

var YoutubeComponent =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(YoutubeComponent, _React$Component);

  function YoutubeComponent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.setPlayer = function (player) {
      _this.player = player;
    };

    _this.handleReady = function () {
      if (!_this.state.isLoaded) {
        _this.setState({
          isLoaded: true
        });
      }
    };

    _this.renderOverlay = function (styles, t) {
      var isLoaded = _this.state.isLoaded;
      var overlayText = t('VideoComponent_Overlay');
      return React.createElement("div", {
        className: classNames(styles.video_overlay)
      }, isLoaded && React.createElement("span", {
        className: styles.video_overlay_message
      }, overlayText));
    };

    _this.renderPlayer = function () {
      var _this$props = _this.props,
          componentData = _this$props.componentData,
          settings = _this$props.settings;
      return React.createElement(YoutubeViewer, {
        ref: _this.setPlayer,
        componentData: componentData,
        settings: settings,
        onReady: _this.handleReady
      });
    };

    _this.onKeyDown = function (e, handler) {
      if (e.key === 'Enter' || e.key === ' ') {
        handler();
      }
    };

    var isPlayable = !props.blockProps || props.blockProps.readOnly === true;
    _this.state = {
      isLoading: false,
      isLoaded: false,
      isPlayable: isPlayable
    };
    return _this;
  }

  var _proto = YoutubeComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.handlePlayerFocus();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.handlePlayerFocus();
  };

  _proto.handlePlayerFocus = function handlePlayerFocus() {
    // eslint-disable-next-line react/no-find-dom-node
    var element = findDOMNode(this).querySelector('iframe, video');

    if (element) {
      element.tabIndex = -1;
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    this.styles = this.styles || mergeStyles({
      styles: styles$2,
      theme: this.context.theme
    });
    var _this$props2 = this.props,
        className = _this$props2.className,
        onClick = _this$props2.onClick;
    var isPlayable = this.state.isPlayable;
    var containerClassNames = classNames(this.styles.video_container, className || '');
    /* eslint-disable jsx-a11y/no-static-element-interactions */

    return React.createElement("div", {
      "data-hook": "videoPlayer",
      onClick: onClick,
      className: containerClassNames,
      onKeyDown: function onKeyDown(e) {
        return _this2.onKeyDown(e, onClick);
      }
    }, !isPlayable && this.renderOverlay(this.styles, this.context.t), this.renderPlayer());
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  };

  return YoutubeComponent;
}(React.Component);

YoutubeComponent.type = {
  VIDEO_TYPE_LEGACY: VIDEO_TYPE_LEGACY,
  VIDEO_TYPE: VIDEO_TYPE
};
YoutubeComponent.propTypes = {
  componentData: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  componentState: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  blockProps: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};
YoutubeComponent.contextType = Context.type;

var createInsertButtons = (function (_ref) {
  var helpers = _ref.helpers,
      t = _ref.t,
      settings = _ref.settings;
  return [{
    type: 'modal',
    name: 'Video',
    tooltipText: t('VideoPlugin_InsertButton_Tooltip'),
    Icon: InsertPluginIcon,
    componentData: DEFAULTS,
    toolbars: [TOOLBARS.FOOTER, TOOLBARS.SIDE],
    modalElement: decorateComponentWithProps(YoutubeSelectionInputModal, settings),
    modalStyles: getModalStyles({
      //apply the extended input modal styles if handleFileSelection is avilable in plugin config
      //& on mobile if enableCustomUploadOnMobile is set to true, otherwise the normal modal styles is applied
      customStyles: (!WixUtils.isMobile() || settings.enableCustomUploadOnMobile) && settings.handleFileSelection ? ExtendedSelectionModalCustomStyle : SelectionModalCustomStyle,
      fullScreen: false
    }),
    helpers: helpers
  }];
});

function createToolbar(_ref) {
  var helpers = _ref.helpers,
      t = _ref.t,
      settings = _ref.settings;
  return {
    InlineButtons: createInlineButtons({
      t: t,
      settings: settings
    }),
    InsertButtons: createInsertButtons({
      helpers: helpers,
      t: t,
      settings: settings
    }),
    name: 'video'
  };
}

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var createYoutubePlugin = function createYoutubePlugin(config) {
  if (config === void 0) {
    config = {};
  }

  var type = VIDEO_TYPE;

  var _config = config,
      helpers = _config.helpers,
      t = _config.t,
      _config$type = _config[type],
      settings = _config$type === void 0 ? {} : _config$type,
      rest = objectWithoutPropertiesLoose(_config, ["helpers", "t", type].map(_toPropertyKey));

  return createBasePlugin(_extends_1({
    component: YoutubeComponent,
    type: VIDEO_TYPE,
    legacyType: VIDEO_TYPE_LEGACY,
    toolbar: createToolbar({
      helpers: helpers,
      t: t,
      settings: settings
    }),
    helpers: helpers,
    settings: settings,
    t: t
  }, rest));
};

var YoutubeViewer$1 =
/*#__PURE__*/
function (_Component) {
  inheritsLoose(YoutubeViewer, _Component);

  function YoutubeViewer(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.normalizeUrl = function (url) {
      return url.toLowerCase().indexOf('vimeo') === 0 ? 'https://' + url : url;
    };

    _this.getVideoRatio = function (wrapper) {
      var element = wrapper.querySelector('iframe, video');
      return element.clientHeight / element.clientWidth;
    };

    _this.fixVideoRatio = function () {
      // eslint-disable-next-line react/no-find-dom-node
      var wrapper = ReactDOM.findDOMNode(_assertThisInitialized(_this)).parentNode;

      var ratio = _this.getVideoRatio(wrapper);

      wrapper.style['padding-bottom'] = ratio * 100 + '%';
    };

    validate(props.componentData, schema);
    return _this;
  }

  var _proto = YoutubeViewer.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.componentData, this.props.componentData)) {
      validate(nextProps.componentData, schema);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        componentData = _this$props.componentData,
        settings = _this$props.settings,
        rest = objectWithoutPropertiesLoose(_this$props, ["componentData", "settings"]);

    this.styles = this.styles || mergeStyles({
      styles: styles$1,
      theme: this.context.theme
    });
    var url = this.normalizeUrl(getVideoSrc(componentData.src, settings));

    var props = _extends_1({}, rest, {
      url: url,
      onReady: this.fixVideoRatio
    });

    return React.createElement(ReactPlayer, _extends_1({
      className: classNames(this.styles.video_player)
    }, props));
  };

  return YoutubeViewer;
}(Component);

YoutubeViewer$1.propTypes = {
  componentData: PropTypes.object.isRequired,
  onReady: PropTypes.func,
  onStart: PropTypes.func,
  controls: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  settings: PropTypes.object.isRequired
};
YoutubeViewer$1.contextType = Context.type;
YoutubeViewer$1.defaultProps = {
  width: '100%',
  height: '100%',
  controls: true
};

var _ModalsMap;
var Modals = {
  YOUTUBE_SELECTION_INPUT: 'youtube-selection-input'
};
var ModalsMap = (_ModalsMap = {}, _ModalsMap[Modals.YOUTUBE_SELECTION_INPUT] = YoutubeSelectionInputModal, _ModalsMap);

export { Modals, ModalsMap, VIDEO_TYPE, VIDEO_TYPE_LEGACY, YoutubeViewer$1 as YoutubeViewer, createYoutubePlugin };
//# sourceMappingURL=module.js.map
