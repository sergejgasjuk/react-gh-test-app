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

const ResultsList = ({users}) => {
  return (
    <div className={'search-result-list'}>
      {users.map((item, index) => {
        return <ResultsItem key={index}
                            item={item}/>
      })}
    </div>
  );
};

const ResultsItem = ({item}) => {
  return (
    <div className={'search-result-item'}>
      
    </div>
  );
};

const SearchUser = (props) => {
  const {
    searchKey,
    users,
  } = props;
  
  const {items} = users;
  
  const hasData = items.length;
  
  function renderTitle(hasData, searchKey) {
    if (!hasData && searchKey) {
      return <NoDataTitle searchKey={searchKey} />;
    }
    
    return <ResultTitle searchKey={searchKey} />
  }
  
  return (
    <div className={'search-users'}>
      {renderTitle(hasData, searchKey)}
      
      {hasData &&
        <ResultsList users={items}/>
      }
    </div>
  );
};

export default SearchUser;
