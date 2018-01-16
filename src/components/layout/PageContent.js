import React from 'react'
import PropTypes from 'prop-types'

import {cssConcat} from 'utils';

const PageContent = ({children, className, ...rest}) => {
  return (
    <div className={cssConcat('page-content', className)}>
      {children}
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default PageContent;