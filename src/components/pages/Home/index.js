import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  contactButton: {
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  aboutButton: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    borderRadius: 50,
    height: 45,
    width: 145,
  },
  buttonContainer: {
    marginTop: '1em',
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  textContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.mainContainer}
      >
        <Grid item /* INTRODUCTION */>
          <Grid container>
            <Grid item className={classes.textContainer}>
              <Typography variant="h2" align="center">
                Front-end developer
                <br />
                seeking for something great
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button className={classes.contactButton} variant="contained">
                    Contact Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.aboutButton}>
                    About Me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
