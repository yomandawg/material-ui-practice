import React from 'react';
// import { Link } from 'react-router-dom';
import NextLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    zIndex: 1302,
    width: '100%',
    marginTop: 'auto',
    height: '10em',
    [theme.breakpoints.down('md')]: {
      height: '8em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em',
    },
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '2em',
  },
}));

export default function Footer({ setSelected, setSelectedItem }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={NextLink}
                href="/"
                className={classes.link}
                onClick={() => setSelected(-1)}
              >
                Home
              </Grid>
              <Grid
                item
                component={NextLink}
                href="/about"
                className={classes.link}
                onClick={() => setSelected(-2)}
              >
                About
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={NextLink}
                href="/react"
                className={classes.link}
                onClick={() => {
                  setSelected(0);
                  setSelectedItem('React');
                }}
              >
                React
              </Grid>
              <Grid
                item
                component={NextLink}
                href="/deployment"
                className={classes.link}
                onClick={() => {
                  setSelected(0);
                  setSelectedItem('Deployment');
                }}
              >
                Deployment
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  );
}
