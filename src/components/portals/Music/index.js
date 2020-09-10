import React, { useEffect, useState } from 'react';

import { arc as theme } from 'components/theme';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import RefreshIcon from '@material-ui/icons/Refresh';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Slider from '@material-ui/core/Slider';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

import YouTube from 'react-youtube';

const useStyles = makeStyles((theme) => ({
  block: {
    position: 'fixed',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(9),
      right: theme.spacing(1.5),
    },
    zIndex: 2000,
  },
  card: {
    display: 'flex',
    marginBottom: '3px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    margin: 'auto',
  },
  slider: {
    display: 'flex',
    margin: 'auto',
    width: 80,
  },
  atag: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'blue',
    },
  },
}));

export default function MediaControlCard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const [player, setPlayer] = useState(null);
  const [playerState, setPlayerState] = useState('loading');
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    if (player) {
      player.setVolume(volume);
    } else {
      setPlayerState('loaded');
    }
  }, [player, volume]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleVolume = (event, newValue) => {
    setVolume(newValue);
  };

  const handlePlayerClick = () => {
    if (playerState === 'playing') {
      setPlayerState('paused');
      player.pauseVideo();
    }
    if (playerState === 'loaded' || playerState === 'paused') {
      setPlayerState('playing');
      player.playVideo();
    }
    if (playerState === 'ended') {
      setPlayerState('playing');
      player.playVideo();
    }
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
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h4" variant="h4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.atag}
                      href="https://www.youtube.com/watch?v=5C-UzW1FLiA"
                    >
                      Trip
                    </a>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Leellamarz
                  </Typography>
                </CardContent>
                <Slider
                  className={classes.slider}
                  value={volume}
                  onChange={handleVolume}
                />
                <IconButton
                  className={classes.controls}
                  onClick={handlePlayerClick}
                >
                  {(() => {
                    if (player) {
                      if (playerState === 'loaded' || playerState === 'paused')
                        return <PlayArrowIcon />;
                      else if (playerState === 'playing') return <PauseIcon />;
                      else if (playerState === 'ended') return <RefreshIcon />;
                    } else {
                      return (
                        <Typography variant="subtitle1" color="textSecondary">
                          Loading...
                        </Typography>
                      );
                    }
                  })()}
                </IconButton>
              </div>
              <CardMedia
                className={classes.cover}
                image="https://img.youtube.com/vi/5C-UzW1FLiA/mqdefault.jpg"
              />
            </Card>
          </Fade>
        )}
      </Popper>
      <YouTube
        videoId="5C-UzW1FLiA"
        opts={{ height: '0', width: '0' }}
        onReady={(event) => setPlayer(event.target)}
        onEnd={() => setPlayerState('ended')}
      />
      <Zoom in={true} unmountOnExit timeout={500}>
        <Fab
          onClick={handleClick}
          color="primary"
          size={matches ? 'medium' : 'large'}
        >
          <YouTubeIcon />
        </Fab>
      </Zoom>
    </div>
  );
}
