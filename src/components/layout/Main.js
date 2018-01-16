import React from 'react'
import PropTypes from 'prop-types'

const Main = ({children, ...rest}) => {
  return (
    <main className='app-main'>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;