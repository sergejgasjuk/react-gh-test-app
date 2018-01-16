import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

class SearchUserForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: props.initialValue || ''
    };
  
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onSubmit(ev) {
    ev.preventDefault();

    const { onSubmit } = this.props;
    const {value} = this.state;
    
    onSubmit && onSubmit(value);
  }
  
  onChange(ev) {
    const { onChange, onInputClear } = this.props;
    const value = ev.target.value;
    
    this.setState({
      value
    });
    
    !value && onInputClear();
    onChange && onChange(value);
  }
  
  render() {
    const {value: searchValue} = this.state;
    
    return (
      <form className={'search-user-form'}
            onSubmit={this.onSubmit}>
        <Row noGutters
             className={''}>
          <Col className={'col-8'}>
            <input type="text"
                   className="form-control"
                   value={searchValue}
                   onChange={this.onChange}
                   placeholder="some github user name.." />
          </Col>
          <Col className={'col-4'}>
            <button type="submit"
                    className="btn btn-primary mb-2"> Search </button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default SearchUserForm;
