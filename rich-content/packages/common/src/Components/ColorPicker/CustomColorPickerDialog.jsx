import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mergeStyles } from '../../Utils/mergeStyles';
import CustomColorPicker from './CustomColorPicker';
import styles from '../../../statics/styles/custom-color-picker-dialog.scss';

class CustomColorPickerDialog extends Component {
  constructor(props) {
    super(props);
    this.styles = mergeStyles({ styles, theme: props.theme });
    this.initialColor = props.color;
    this.state = {
      color: props.color,
    };
    this.onCancel = this.onCancel.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(color) {
    this.setState({ color: color.hex.toUpperCase() });
  }

  onCancel() {
    this.props.onChange(this.initialColor);
  }

  onUpdate() {
    this.props.onChange(this.state.color);
  }

  render() {
    const { styles } = this;
    const { t, isMobile, theme } = this.props;
    return (
      <div className={styles.colorPickerDialog}>
        <CustomColorPicker
          color={this.state.color}
          onChange={this.onChange}
          t={t}
          isMobile={isMobile}
          theme={theme}
        />
        <hr className={styles.colorPickerDialog_separator} />
        <div className={styles.colorPickerDialog_buttons}>
          <button className={styles.colorPickerDialog_button} onClick={this.onCancel}>
            {t('ColorPickerButtonLabel_Cancel')}
          </button>
          <button
            className={classNames(
              styles.colorPickerDialog_button,
              styles.colorPickerDialog_button_update
            )}
            onClick={this.onUpdate}
          >
            {t('ColorPickerButtonLabel_Update')}
          </button>
        </div>
      </div>
    );
  }
}

CustomColorPickerDialog.propTypes = {
  t: PropTypes.func,
  color: PropTypes.string,
  isMobile: PropTypes.bool,
  theme: PropTypes.object,
  onChange: PropTypes.func,
};

export default CustomColorPickerDialog;
