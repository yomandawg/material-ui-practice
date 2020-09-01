import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';

import { arc as theme } from 'components/theme';

export default styled(Button)`
  min-width: 10px;
  margin-left: 25px;
  border: 2px solid transparent;
  border-radius: 2px;

  ${{ ...theme.typography.tab }};

  ${({ index, selected }) => (index === selected ? '' : '&:hover')} {
    color: white;
    background: transparent;
    border-bottom: 2px solid limegreen;
  }
`;
