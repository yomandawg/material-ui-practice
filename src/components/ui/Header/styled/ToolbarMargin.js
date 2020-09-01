import styled from 'styled-components';

import { arc as theme } from 'components/theme';

export default styled.div`
  ${{ ...theme.mixins.toolbar }};
  margin-bottom: 3em;
`;
