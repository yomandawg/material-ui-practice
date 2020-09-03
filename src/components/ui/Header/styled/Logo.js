import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default styled(Button)`
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
