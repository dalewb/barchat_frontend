import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    height: 140,
    width: 100,
  },
};

function User(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography color="textSecondary">
            {props.info.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )

}

export default withStyles(styles)(User);
