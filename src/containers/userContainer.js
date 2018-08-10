import React, { Component } from 'react';
import User from '../components/user'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

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
    return (
      this.state.users.map(user => {
        return (
          <Grid item key={user.id}>
            <User info={user} />
          </Grid>
        )
      })
    )
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={8}>
            {this.renderUsers()}
          </Grid>
        </Grid>
      </Grid>
    )
  }

}

export default withStyles(styles)(UserContainer);
