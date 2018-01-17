import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {fetchUser, resetUser} from 'actions';

import UserMain from './UserMain';

class UserMainContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const {match, fetchUser} = this.props;
    const login = match.params.login;

    if (login) {
      fetchUser(login);
    }
  }
  
  componentWillUnmount() {
    this.props.resetUser();
  }
  
  render() {
    const {ghUser, match} = this.props;
    const userLogin = match.params.login;
    
    return (
      <UserMain user={ghUser}
                userLogin={userLogin}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    ghUser: state.ghSingleUser.user
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchUser,
  resetUser
})(UserMainContainer));
