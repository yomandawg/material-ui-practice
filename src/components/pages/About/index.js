import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

// import emailIcon from 'assets/email.svg';

const useStyles = makeStyles((theme) => ({
  right: {
    backgroundColor: 'white',
  },
  background: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      height: '40em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '30em',
    },
  },
  message: {
    marginTop: '2em',
    borderRadius: 5,
    border: `2px solid ${theme.palette.common.blue}`,
  },
  sendButton: {
    borderRadius: 50,
    height: 45,
    width: 200,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        'https://asia-northeast2-mui-practice-5db02.cloudfunctions.net/sendMail',
        { params: { name: name, email: email, message: message } }
      )
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Message sent successfully!',
          backgroundColor: '#4BB543',
        });
      })
      .catch((error) => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again!',
          backgroundColor: '#FF3232',
        });
      });
  };

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        className={classes.background}
        direction="column"
        alignItems="center"
        justify="center"
        lg={8}
      >
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="h2">
                Some things
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="subtitle2"
                style={{ fontSize: '1.5rem' }}
              >
                Other things
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        lg={4}
        className={classes.right}
      >
        <Grid
          item
          style={{
            marginBottom: matchesMD ? '3em' : 0,
            marginTop: matchesMD ? '3em' : 0,
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" style={{ lineHeight: 1 }}>
                Contact Me
              </Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item style={{ marginTop: '1em' }}>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontsize: '1rem' }}
                >
                  <img
                    src="/assets/email.svg"
                    alt="envelope"
                    style={{ marginRight: '0.5em', verticalAlign: 'middle' }}
                  />
                  myemailaddress
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="column"
                style={{ maxWidth: '20em' }}
              >
                <Grid item style={{ marginTop: '1em' }}>
                  <TextField
                    label="Name"
                    id="name"
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginTop: '1em' }}>
                  <TextField
                    label="Email"
                    id="email"
                    fullWidth
                    value={email}
                    onChange={onChange}
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                  />
                </Grid>
              </Grid>
              <Grid item style={{ maxWidth: '20em', marginTop: '1em' }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  className={classes.message}
                  fullWidth
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  multiline
                  rows={10}
                />
              </Grid>
              <Grid
                item
                container
                justify="center"
                style={{ marginTop: '2em' }}
              >
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    emailHelper.length !== 0
                  }
                  variant="contained"
                  className={classes.sendButton}
                  onClick={() => setOpen(true)}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={open}
          fullScreen={matchesXS}
          onClose={() => setOpen(false)}
          style={{ zIndex: 1302 }}
          PaperProps={{ style: { justifyContent: 'center' } }}
        >
          <DialogContent>
            <Grid container direction="column">
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item style={{ marginTop: '1em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
            </Grid>
            <Grid
              item
              style={{
                marginTop: '1em',
              }}
            >
              <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                fullWidth
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                multiline
                rows={10}
              />
            </Grid>
            <Grid
              item
              container
              style={{
                marginTop: '1em',
                marginBottom: '0.5em',
                justifyContent: 'center',
              }}
            >
              {loading ? (
                <CircularProgress size={30} />
              ) : (
                <>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                  <Button
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      emailHelper.length !== 0
                    }
                    color="primary"
                    onClick={onConfirm}
                  >
                    Send
                  </Button>
                </>
              )}
            </Grid>
          </DialogContent>
        </Dialog>
        <Snackbar
          open={alert.open}
          message={alert.message}
          ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={() => setAlert({ ...alert, open: false })}
          autoHideDuration={4000}
        />
      </Grid>
    </Grid>
  );
}
