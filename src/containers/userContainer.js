import React, { Component } from 'react';
import User from '../components/user'

class UserContainer extends Component {

  state = {
    users: [],
  }

  compnentDidMount(
    this.getAllUsers()
  )

  getAllUsers = () => {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(json => this.setState({
      users: json
    }))
  }

  renderUsers = () => {
    return this.state.users.map(user => {
      return (
        <User info={user} />
      )
    })
  }

  render() {
    return (

    )
  }

}

export default UserContainer;
