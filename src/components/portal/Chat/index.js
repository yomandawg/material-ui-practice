import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  min-height: 50px;
  min-width: 50px;
  background-color: #4caf50;
  display: inline-block;
`;

const StyledPaper = styled(Paper)`
  background-color: blue;
`;

export default function ChatComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement="top-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <StyledPaper elevation={3}>
              <div>agdfgadfagdfgadf</div>
            </StyledPaper>
          </Fade>
        )}
      </Popper>
      <StyledButton onClick={handleClick} />
    </div>
  );
}
