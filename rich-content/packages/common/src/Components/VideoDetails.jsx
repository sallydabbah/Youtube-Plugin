import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mergeStyles } from '../Utils/mergeStyles';
import styles from '../../statics/styles/button.scss';

class VideoDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var divStyle = {
      width:'50%',
      display: 'inline'

    };
    
    return (
      <video width="150" height="150" controls>
      <source src="https://www.youtube.com/watch?v=PkZNo7MFNFg" type="video">
      </source>
</video>  

    );
  }
}

export default VideoDetails;
