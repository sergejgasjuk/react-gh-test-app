import React from 'react'
import PropTypes from 'prop-types'

import AppWrap from 'components/layout/AppWrap';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Main from 'components/layout/Main';

const CommonTemplate = ({
  header,
  footer,
  children,
  ...props}) => {
  
  return (
    <AppWrap {...props}>
      {header}
      
      <Main>
        {children}
      </Main>
      
      {footer}
    </AppWrap>
  );
};

CommonTemplate.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node
  ]),
  children: PropTypes.node,
};

CommonTemplate.defaultProps = {
  header: <Header />,
  footer: <Footer />
};

export default CommonTemplate;
