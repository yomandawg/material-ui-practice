import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import RefreshIcon from '@material-ui/icons/Refresh';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Slider from '@material-ui/core/Slider';

import YouTube from 'react-youtube';

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 90px;
  right: 20px;
  min-width: 50px;
  min-height: 50px;
  background-color: limegreen;
  display: flex;
  z-index: 2000;
  &:hover {
    background-color: green;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  youtube: {
    position: 'absolute',
  },
  modal: {
    zIndex: 2000,
  },
}));

function MediaControlCard() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

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
    <>
      <Popper
        className={classes.modal}
        open={open}
        anchorEl={anchorEl}
        placement="top-end"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
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
        className={classes.youtube}
        videoId="5C-UzW1FLiA"
        opts={{ height: '0', width: '0' }}
        onReady={(event) => setPlayer(event.target)}
        onEnd={() => setPlayerState('ended')}
      />
      <StyledButton onClick={handleClick}>
        <YouTubeIcon />
      </StyledButton>
    </>
  );
}

export default styled(MediaControlCard)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
