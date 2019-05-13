import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
class Tooltip extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    moveBy: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'light', 'dark']),
    shouldRebuildOnUpdate: PropTypes.func,
  };

  static defaultProps = {
    moveBy: { x: 0, y: 0 },
    type: 'dark',
    shouldRebuildOnUpdate: () => false,
  };

  componentDidMount() {
    this.props.shouldRebuildOnUpdate() && ReactTooltip.rebuild();
  }

  componentDidUpdate() {
    this.props.shouldRebuildOnUpdate() && ReactTooltip.rebuild();
  }

  render() {
    const { children, content, moveBy, type } = this.props || {};
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        'data-tip': content,
        'data-offset': JSON.stringify({ top: moveBy.y, left: moveBy.x }),
        'data-type': type,
      })
    )[0];
  }
}

export default Tooltip;
