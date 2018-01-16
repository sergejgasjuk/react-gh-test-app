import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


const base = 'app-head';
const css = {
  bl: base,
};

const cx = classNames.bind(css);

class Header extends Component {
  render() {
    return (
      <Navbar className={'navbar-inverse bg-inverse'}>
        <NavbarBrand href="/">
          Search GH User!
        </NavbarBrand>
      </Navbar>
    );
  }
}

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
