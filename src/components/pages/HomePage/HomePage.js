import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import CommonTemplate from 'components/templates/CommonTemplate';
import PageContent from 'components/layout/PageContent';
import UserSearchContainer from 'components/pages/HomePage/UserSearchContainer';

class HomePage extends Component {
  render() {
    return (
      <CommonTemplate footer={false}>
        <PageContent>
          <Container>
            <UserSearchContainer />
          </Container>
        </PageContent>
      </CommonTemplate>
    );
  }
}

export default HomePage;
