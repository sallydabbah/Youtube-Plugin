import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Context, validate, mergeStyles } from 'wix-rich-content-common';
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

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

var styles = {"video_player":"video-viewer__video_player___tHkyM","video_container":"video-viewer__video_container___PRy0-"};

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
      styles: styles,
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

var VIDEO_TYPE = 'wix-draft-plugin-youtube';
var VIDEO_TYPE_LEGACY = 'VIDEO-EMBED';

var containerClassName = function containerClassName(theme) {
  var mergedStyles = mergeStyles({
    styles: styles,
    theme: theme
  });
  return mergedStyles.video_container;
};

var typeMapper = function typeMapper() {
  var _ref;

  return _ref = {}, _ref[VIDEO_TYPE_LEGACY] = {
    component: YoutubeViewer,
    classNameStrategies: {
      container: containerClassName
    }
  }, _ref[VIDEO_TYPE] = {
    component: YoutubeViewer,
    classNameStrategies: {
      container: containerClassName
    }
  }, _ref;
};

export { VIDEO_TYPE, typeMapper as youtubeTypeMapper };
//# sourceMappingURL=module.viewer.js.map
