import React, { Component } from 'react';

class User extends Component {

  render() {
    return (
      <p>{this.props.info.description}</p>
    )
  }
}

export default User;
