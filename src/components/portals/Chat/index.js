import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  min-width: 50px;
  min-height: 50px;
  background-color: limegreen;
  display: inline-block;
  display: flex;
  z-index: 2000;
  &:hover {
    background-color: green;
  }
`;

const StyledPaper = styled(Paper)`
  width: 250px;
  height: 400px;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    zIndex: 2000,
  },
}));

export default function ChatComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
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
            <StyledPaper elevation={3}>
              <div>agdfgadfagdfgadf</div>
            </StyledPaper>
          </Fade>
        )}
      </Popper>
      <StyledButton onClick={handleClick}>
        <ChatBubbleIcon fontSize="default" />
      </StyledButton>
    </>
  );
}
