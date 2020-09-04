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
  min-width: 10px;
  margin-left: 25px;
  border-bottom: 2px solid transparent;
  border-radius: 50%;
  background: unset !important;
  opacity: 0.7;

  ${({ theme }) => theme.typography.tab}};

  ${({ index, selected }) => (index === selected ? '' : '&:hover')} {
    opacity: 1;
    border-color: limegreen;
  }
`;

export const MenuContainer = styled.div`
  margin-left: auto;
  margin-right: 25px;
  display: flex;
`;

export const StyledMenuItem = styled(MenuItem)`
  ${({ theme }) => theme.typography.tab};
  opacity: ${({ selected }) => (selected ? 1 : 0.7)};
  background: none !important;
  letter-spacing: 0.45px;

  &:hover {
    opacity: 1;
  }
`;

export const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    background-color: ${({ theme }) => theme.palette.common.blue};
    border-radius: 0;
  }
`;
