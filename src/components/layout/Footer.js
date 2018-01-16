import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';

const base = 'app-footer';
const css = {
  bl: base,
};

const cx = classNames.bind(css);

class Footer extends Component {
  render() {
    return (
      <footer className={cx('bl')}>
  
      </footer>
    );
  }
}

Footer.propTypes = {

};

Footer.defaultProps = {

};

export default Footer;
