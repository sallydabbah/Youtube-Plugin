import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import ToolbarButton from '../../Components/ToolbarButton';

export default ({ alignment, Icon, tooltipTextKey }) =>
  class BlockAlignmentButton extends Component {
    static propTypes = {
      alignment: PropTypes.string,
      setLayoutProps: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      theme: PropTypes.object.isRequired,
      isMobile: PropTypes.bool,
      tooltipText: PropTypes.string,
      t: PropTypes.func,
      tabIndex: PropTypes.number,
      icon: PropTypes.func,
      keyName: PropTypes.string.isRequired,
    };

    isActive = () => this.props.alignment === alignment;

    handleClick = event => {
      event.preventDefault();
      if (this.props.disabled) {
        return;
      }
      this.props.setLayoutProps({ alignment });
    };

    preventBubblingUp = event => {
      event.preventDefault();
    };

    render() {
      const { disabled, theme, isMobile, t, tabIndex, keyName } = this.props;
      const className = classNames({
        [theme.button]: true,
        [theme.active]: this.isActive(),
        [theme.disabled]: disabled,
      });
      const tooltipText = t(tooltipTextKey);
      const showTooltip = !isMobile && !isEmpty(tooltipText);
      const dataHookText = `blockAlignmentButton_${keyName}`;
      const IconComponent = this.props.icon || Icon;

      /* eslint-disable jsx-a11y/no-static-element-interactions */
      const blockButton = (
        <div className={theme.buttonWrapper} onMouseDown={this.preventBubblingUp}>
          <button
            tabIndex={tabIndex}
            className={className}
            data-hook={dataHookText}
            onClick={this.handleClick}
          >
            <div className={theme.icon}>
              <IconComponent />
            </div>
          </button>
        </div>
      );
      /* eslint-enable jsx-a11y/no-static-element-interactions */

      return (
        <ToolbarButton
          theme={theme}
          showTooltip={showTooltip}
          tooltipText={tooltipText}
          button={blockButton}
          tooltipOffset={{ y: -20 }}
        />
      );
    }
  };
