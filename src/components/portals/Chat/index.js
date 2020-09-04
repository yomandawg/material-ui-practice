import React from 'react';

import { arc as theme } from 'components/theme';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  block: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(1.5),
      right: theme.spacing(1.5),
    },
    zIndex: 2000,
  },
  paper: {
    width: '250px',
    height: '400px',
    marginBottom: '3px',
  },
}));

export default function ChatComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  return (
    <div className={classes.block}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="top-end"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper} elevation={3}>
              <div>agdfgadfagdfgadf</div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Zoom in={true} unmountOnExit timeout={500}>
        <Fab
          onClick={handleClick}
          color="primary"
          size={matches ? 'medium' : 'large'}
        >
          <ChatBubbleIcon />
        </Fab>
      </Zoom>
    </div>
  );
}
