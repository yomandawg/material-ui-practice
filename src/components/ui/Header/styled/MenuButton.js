import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default styled(Button)`
  min-width: 10px;
  margin-left: 25px;
  border-bottom: 2px solid transparent;
  border-radius: 50%;
  background-color: unset !important;
  opacity: 0.7;

  ${({ theme }) => theme.typography.tab}};

  ${({ index, selected }) => (index === selected ? '' : '&:hover')} {
    opacity: 1;
    border-color: limegreen;
  }
`;
