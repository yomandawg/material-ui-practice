import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import background from 'assets/background.jpg';
import emailIcon from 'assets/email.svg';
import airplane from 'assets/send.svg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        className={classes.background}
        justify="center"
        lg={8}
      ></Grid>
      <Grid item container direction="column" justify="center" lg={4}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Me
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue }}
          >
            Waiting...
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={emailIcon}
              alt="envelope"
              style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontsize: '1rem' }}
            >
              youngjunkyj@gmail.com
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item>
              <TextField
                label="Name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.valule)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.valule)}
              />
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              label="Message"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              multiline
              rows={10}
            />
          </Grid>
          <Grid item>
            <Button>
              Send Message
              <img src={airplane} alt="send" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
