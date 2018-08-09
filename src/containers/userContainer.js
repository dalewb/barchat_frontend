import React, { Component } from 'react';
import User from '../components/user'

class UserContainer extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    console.log("Inside fetch")
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(json => this.setState({
      users: json
    }))
  }

  renderUsers = () => {
    return this.state.users.map(user => {
      console.log("Inside renderUsers, user is", user)
      return (
        <User key={user.id} info={user} />
      )
    })
  }

  render() {
    return (
      this.renderUsers()
    )
  }

}

export default UserContainer;
