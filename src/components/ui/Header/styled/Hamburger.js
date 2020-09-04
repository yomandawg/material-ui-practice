import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const StyledIconButton = styled(IconButton)`
  margin-left: auto;
  &:hover {
    background-color: transparent;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  height: 50px;
  width: 50px;
`;
