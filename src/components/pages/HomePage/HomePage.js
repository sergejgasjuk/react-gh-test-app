import React, { Component } from 'react';

import CommonTemplate from 'components/templates/CommonTemplate';
import PageContent from 'components/layout/PageContent';

import { Container, Row, Col } from 'reactstrap';
import SearchUserContainer from 'components/pages/HomePage/SearchUserContainer';

import axios from 'axios';

class HomePage extends Component {
  componentDidMount() {
//    axios.get('https://api.github.com/search/users?q=tom')
//         .then((res) => {
//           console.log(res.data);
//         });
//
//
  }
  
  render() {
    return (
      <CommonTemplate footer={false}>
        <PageContent>
          <Container>
            <SearchUserContainer />
          </Container>
        </PageContent>
      </CommonTemplate>
    );
  }
}

export default HomePage;
