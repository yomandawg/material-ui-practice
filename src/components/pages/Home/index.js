import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import animationData from 'assets/animations/landinganimation/data';

const useStyles = makeStyles((theme) => ({}));

export default function LandingPage() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item>
              <Typography variant="h2" align="center">
                Front-end developer
                <br />
                seeking for something great
              </Typography>
              <Grid container>
                <Grid item>
                  <Button variant="contained">Contact Me</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Learn More</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item>
              <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
