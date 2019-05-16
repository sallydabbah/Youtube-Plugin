import React from 'react';
import PropTypes from 'prop-types';
import defaultStyles from '../../../statics/styles/saturation-pointer.scss';
import { mergeStyles } from '../../Utils/mergeStyles';

const SaturationPointer = theme => {
  const styles = mergeStyles({ styles: defaultStyles, theme });
  return (
    <div className={styles.saturationPointer}>
      <div className={styles.saturationPointer_top_path} />
      <div className={styles.saturationPointer_bottom_path} />
      <div className={styles.saturationPointer_left_path} />
      <div className={styles.saturationPointer_right_path} />
      <div className={styles.saturationPointer_circle} />
    </div>
  );
};

SaturationPointer.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default SaturationPointer;
