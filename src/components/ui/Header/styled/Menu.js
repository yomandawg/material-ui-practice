import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export const Logo = styled(Button)`
  padding: 0;
  background-color: unset !important;
  & img {
    height: 8em;

    ${({ theme }) => theme.breakpoints.down('md')} {
      height: 7em;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
      height: 5.5em;
    }
  }
`;

export const MenuButton = styled(Button).attrs((props) => ({
  disableRipple: true,
  disableElevation: true,
  variant: 'contained',
}))`
  min-width: 200px;
  margin-left: 25px;
  border-bottom: 2px solid transparent;
  border-radius: 50%;
  background: unset !important;
  opacity: 0.7;

  font-family: Raleway;
  text-transform: none;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 1rem;
  color: white;

  &:hover {
    opacity: 1;
  }

  ${({ index, selected }) =>
    index === selected ? 'opacity: 1; border-color: limegreen;' : ''};
`;

export const MenuContainer = styled.div`
  margin: auto;
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: Raleway;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 1rem;
  color: white;

  justify-content: center;

  opacity: ${({ selected }) => (selected ? 1 : 0.7)};
  background: none !important;

  &:hover {
    opacity: 1;
  }
`;

export const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    min-width: 200px;
    background-color: ${({ theme }) => theme.palette.common.blue};
    border-radius: 0;
    z-index: 0;
  }
  .MuiMenu-list {
    padding-top: 0;
  }
`;
