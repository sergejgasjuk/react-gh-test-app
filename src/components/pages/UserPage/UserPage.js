import React, { Component } from 'react';

import CommonTemplate from 'components/templates/CommonTemplate';
import PageContent from 'components/layout/PageContent';
import {Container, Row, Col} from 'reactstrap';

import UserMainContainer from './UserMainContainer';

class UserPage extends Component {
  render() {
    return (
      <CommonTemplate footer={false}>
        <PageContent>
          <Container>
            <UserMainContainer />
          </Container>
        </PageContent>
      </CommonTemplate>
    );
  }
}

export default UserPage;
