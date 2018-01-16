import React, { Component } from 'react';

const NoDataTitle = ({searchKey}) => {
  return (
    <h3>Nothing's found for "{searchKey}" =(</h3>
  );
};

const ResultTitle = ({searchKey}) => {
  return (
    <h3>Results for "{searchKey}":</h3>
  );
};

const SearchUser = (props) => {
  const {
    searchKey,
    isNoData
  } = props;
  
  function renderTitle() {
    if (isNoData) {
      return <NoDataTitle searchKey={searchKey} />;
    }
    
    return <ResultTitle searchKey={searchKey} />
  }
  
  return (
    <div className={'search-users'}>
      {renderTitle()}
      
    </div>
  );
};

export default SearchUser;
