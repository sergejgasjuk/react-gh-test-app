import React, { Component } from 'react';

const ResultList = ({users}) => {
  console.log(users);
  
  return (
    <div className={'usb-resultlist list-group'}>
      {users.map((item, index) => {
        return <ResultItem key={index}
                           item={item}
        />
      })}
    </div>
  );
};

const ResultItem = ({item}) => {
  return (
    <div className={'usb-result-item list-group-item'}>
      <div className={'avatar'}>
        <img src={item.avatar_url} alt={item.login}/>
      </div>
      
      <div className={'login font-weight-bold'}>
        {item.login}
      </div>
    </div>
  );
};

const UserSearchResult = (props) => {
  const {
    searchKey,
    users,
  } = props;
  
  const {items} = users;
  const hasData = (items && items.length);
  
  function renderBody() {
    if (!hasData) {
      return <h6 className={'usb-result-nodata'}>No Data Found.</h6>
    }
    
    return <ResultList users={items} />;
  }
  
  return (
    <div className={'usb-result'}>
      <h3 className={'usb-result-title'}>
        Results for "{searchKey}":
      </h3>
      
      {renderBody()}
    </div>
  );
};

export default UserSearchResult;
