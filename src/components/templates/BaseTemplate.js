import React from 'react'
import PropTypes from 'prop-types'

import AppWrap from 'components/layout/AppWrap';

const BaseTemplate = ({children, ...props}) => {
  return (
    <AppWrap {...props}>
      {children}
    </AppWrap>
  );
};

export default BaseTemplate;
