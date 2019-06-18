import React, { Component } from 'react';
import { FormGroup } from 'reactstrap'
import { Input } from '../common_components/Input';
import  Button from '../common_components/Button';
import { connect } from 'react-redux';
import { getUserDeatils } from '../actions/ActionIndex';
import _ from 'lodash'

const initialState = {
  fname: '',
  lname: '',
  email: '',
  password: ''
}
class ReduxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: _.cloneDeep(initialState)
    }
  }
  getUserDetails(id, value) {
    let obj = {};
    obj[id] = value;
    this.setState({ user: { ...this.state.user, ...obj } })
  }
  submitUserData() {
    this.props.dispatch(getUserDeatils(this.state.user))
    this.setState({ user: { ...initialState } })
  }
  render() {
    return (
      <div className='form'>
        <FormGroup>
          <div className='label'>First Name</div>
          <Input type='text' value={this.state.user.fname} id='fname' onChange={(id, value) => this.getUserDetails(id, value)} />
        </FormGroup>
        <div className='label'>Last Name</div>
        <Input type='text' value={this.state.user.lname} id='lname' onChange={(id, value) => this.getUserDetails(id, value)} />
        <FormGroup>
          <div className='label'>Email</div>
          <Input type='text' value={this.state.user.email} id='email' onChange={(id, value) => this.getUserDetails(id, value)} />
        </FormGroup>
        <FormGroup>
          <div className='label'>Password</div>
          <Input type='text' value={this.state.user.password}  id='password' onChange={(id, value) => this.getUserDetails(id, value)} />
        </FormGroup>
        <Button name='Submit' onClick={() => this.submitUserData()} />
      </div>
    )
  }
}
export default connect()(ReduxDemo);