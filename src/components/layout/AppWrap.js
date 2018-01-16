import React from 'react'
import PropTypes from 'prop-types'

const AppWrap = ({children}) => {
  return (
    <div id="app" className="app">
      {children}
    </div>
  );
};

AppWrap.propTypes = {
  children: PropTypes.node
};

export default AppWrap;
