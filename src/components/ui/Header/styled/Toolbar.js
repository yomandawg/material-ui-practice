import styled from 'styled-components';

export const ToolbarMargin = styled.div`
  ${({ theme }) => theme.mixins.toolbar}
  margin-bottom: 3em;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 2em;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    margin-bottom: 1.25em;
  }
`;
