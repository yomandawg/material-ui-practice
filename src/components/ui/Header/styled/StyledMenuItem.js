import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';

export default styled(MenuItem)`
  ${({ theme }) => theme.typography.tab}
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  background-color: 'unset !important';
`;
