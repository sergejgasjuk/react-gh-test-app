import React, { Component } from 'react';

import SearchUserForm from './SearchUserForm';

const SearchUser = (props) => {
  return (
    <div className={'search-users'}>
      <h2>Search GitHub Users: </h2>
      <SearchUserForm />
    </div>
  );
};

export default SearchUser;
