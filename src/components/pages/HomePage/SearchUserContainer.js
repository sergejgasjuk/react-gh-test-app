import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers, resetSearchUsers } from 'actions';

import SearchUserForm from './SearchUserForm';
import SearchUserResults from './SearchUserResults';


class SearchUserContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchKey: '',
      isVisibleResult: false
    };
    
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchValChange = this.handleSearchValChange.bind(this);
    this.handleSearchValClear = this.handleSearchValClear.bind(this);
  }
  
  handleSearchSubmit(value) {
    if (!value) {
      return;
    }
    
    this.props.searchUsers(value);
    
    this.setState({
      searchKey: value,
      isVisibleResult: !!(value && value.length)
    });
  }
  
  handleSearchValChange(value) {
  
  }
  
  handleSearchValClear() {
    this.setState({
      searchKey: '',
      isVisibleResult: false
    });
  
    this.props.resetSearchUsers();
  }
  
  componentWillUnmount() {
    this.props.resetSearchUsers();
  }
  
  render() {
    const {searchKey, isVisibleResult} = this.state;
    const {ghUsers} = this.props;
    
    return (
      <div className={'search-users'}>
        <h2>Search GitHub Users: </h2>
        <SearchUserForm
          onValueChange={this.handleSearchValChange}
          onInputClear={this.handleSearchValClear}
          onSubmit={this.handleSearchSubmit}
        />
        
        {ghUsers.items.length}
        
        {isVisibleResult &&
         <SearchUserResults searchKey={searchKey}
                            users={ghUsers}
         />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ghUsers: state.ghUsers
  }
}

export default connect(mapStateToProps, {
  searchUsers,
  resetSearchUsers
})(SearchUserContainer);
