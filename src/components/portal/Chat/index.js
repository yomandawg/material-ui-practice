import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import { arc as theme } from 'components/theme';

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  min-width: 50px;
  min-height: 50px;
  background-color: limegreen;
  display: inline-block;
  display: flex;
  &:hover {
    background-color: green;
  }
`;

const StyledPaper = styled(Paper)`
  width: 300px;
  height: 500px;
  background-color: ${theme.palette.primary.main};
`;

export default function ChatComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  return (
    <>
      <Popper open={open} anchorEl={anchorEl} placement="top-end" transition>
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
