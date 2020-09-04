import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const StyledIconButton = styled(IconButton)`
  margin-left: 20px;
  &:hover {
    background-color: transparent;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  height: 40px;
  width: 40px;
`;
