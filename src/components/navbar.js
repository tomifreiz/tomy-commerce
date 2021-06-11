import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../images/logo.jpg'
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "1rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={logo} width="100" height="100"/>
          </IconButton>
          <div className={classes.grow}/>
          <Typography variant="h6" color="primary" >
            Bienvenidos
          </Typography>
            <div className={classes.button}>
              <Button variant="outlinded">
                <strong>Login</strong>
              </Button>
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
              <ShoppingCart fontSize="large" color="primary"/>
                </Badge>
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
