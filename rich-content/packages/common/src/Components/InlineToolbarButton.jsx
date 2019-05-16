import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import ToolbarButton from './ToolbarButton';
import styles from '../../statics/styles/inline-toolbar-button.scss';

export default class InlineToolbarButton extends Component {
  constructor(props) {
    super(props);
    const { buttonStyles } = props.theme || {};

    this.styles = {
      button: classNames(styles.inlineToolbarButton, {
        [buttonStyles.inlineToolbarButton]: !!buttonStyles.inlineToolbarButton,
        [buttonStyles.pluginToolbarButton]: !!buttonStyles.pluginToolbarButton,
      }),
      buttonWrapper: classNames(styles.inlineToolbarButton_wrapper, {
        [buttonStyles.inlineToolbarButton_wrapper]: !!buttonStyles.inlineToolbarButton_wrapper,
        [buttonStyles.pluginToolbarButton_wrapper]: !!buttonStyles.pluginToolbarButton_wrapper,
      }),
      icon: classNames(styles.inlineToolbarButton_icon, {
        [buttonStyles.inlineToolbarButton_icon]: !!buttonStyles.inlineToolbarButton_icon,
        [buttonStyles.pluginToolbarButton_icon]: !!buttonStyles.pluginToolbarButton_icon,
      }),
      active: classNames(styles.inlineToolbarButton_active, {
        [buttonStyles.inlineToolbarButton_active]: !!buttonStyles.inlineToolbarButton_active,
        [buttonStyles.pluginToolbarButton_active]: !!buttonStyles.pluginToolbarButton_active,
      }),
    };
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    theme: PropTypes.object.isRequired,
    isMobile: PropTypes.bool,
    tooltipText: PropTypes.string,
    tabIndex: PropTypes.number,
    icon: PropTypes.func.isRequired,
    forwardRef: PropTypes.object,
  };

  handleClick = () => this.props.onClick && this.props.onClick();

  preventBubblingUp = event => event.preventDefault();

  render() {
    const { isActive, theme, isMobile, tooltipText, tabIndex, icon: Icon, forwardRef } = this.props;
    const { styles } = this;
    const showTooltip = !isMobile && !isEmpty(tooltipText);

    const iconClassNames = classNames(styles.icon, {
      [styles.active]: isActive,
    });

    const codeBlockButton = (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div className={styles.buttonWrapper} onMouseDown={this.preventBubblingUp} ref={forwardRef}>
        <button
          tabIndex={tabIndex}
          aria-label={tooltipText}
          aria-pressed={isActive}
          data-hook="codeBlockButton"
          onClick={this.handleClick}
          className={styles.button}
        >
          <div className={iconClassNames}>
            <Icon />
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
        button={codeBlockButton}
        tooltipOffset={{ y: -20 }}
      />
    );
  }
}
