/* eslint-disable max-len */
import React from 'react';

const SizeSmallCenterIcon = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={19}
    height={19}
    viewBox="0 0 19 19"
    {...props}
  >
    <defs>
      <path
        id="small-size-path"
        d="M17 3.2v.6a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h14.6c.11 0 .2.09.2.2zm0 12v.6a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h14.6c.11 0 .2.09.2.2zM4.2 6h10.6c.11 0 .2.09.2.2v6.6a.2.2 0 0 1-.2.2H4.2a.2.2 0 0 1-.2-.2V6.2c0-.11.09-.2.2-.2zM5 7v5h9V7H5z"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="small-size-mask">
        <use xlinkHref="#small-size-path" />
      </mask>
      <use fillRule="nonzero" xlinkHref="#small-size-path" />
    </g>
  </svg>
);

export default SizeSmallCenterIcon;
