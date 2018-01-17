import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchUserRepos } from 'actions';

const tableKeys = ['name', 'description', 'html_url'];
const keysMap = {
  'name': 'Name',
  'description': 'Description',
  'html_url': 'GitHub Link'
};

const pickUpKeys = (arr, keys) => {
  return _.map(arr, _.partialRight(_.pick, keys));
  //return _.map(arr, i => _.pick(i, tableKeys))
};

class UserRepos extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const {userLogin, fetchUserRepos, userRepos} = this.props;
    
    if (userLogin && (!userRepos)) {
      fetchUserRepos(userLogin);
    }
  }
  
  renderHead(cols = []) {
    return (
      <thead>
      <tr>
        {cols.map((col, idx) => {
          return (
            <th key={idx}> {keysMap[col]} </th>
          );
        })}
      </tr>
      </thead>
    )
  }
  
  renderBody(data = []) {
    return (
      <tbody>
      {data.map((row, idx) => {
        return <tr key={idx}> {this.renderColumns(row)} </tr>
      })}
      </tbody>
    )
  }
  
  checkCol(val) {
    return (
      <a href={val} target={'_blank'}>{val}</a>
    )
  }
  
  renderColumns(data = {}, keys = tableKeys) {
    return (
      keys.map((k, i) => {
        let result = (k === 'html_url') ? this.checkCol(data[k]) : data[k];
        
        return (
          <td key={i}>
            {result}
          </td>
        )
      })
    )
  }
  
  render() {
    const {userRepos} = this.props;
    const finalRepos = pickUpKeys(userRepos, tableKeys);
    
    if (!userRepos || !userRepos.length) {
      return (<h4>No Repos Found..</h4>);
    }
    
    return (
      <table className={'user-repos table table-bordered'}>
        {this.renderHead(tableKeys)}
        {this.renderBody(finalRepos)}
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    userRepos: state.ghSingleUser.repos
  }
}

export default connect(mapStateToProps, {
  fetchUserRepos,
})(UserRepos);

