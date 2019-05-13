import React from 'react';
import Iframe from './Iframe';

const IframeUrl = props => (
  <Iframe {...props} sandbox="allow-presentation allow-forms allow-same-origin allow-scripts" />
);

export default IframeUrl;
