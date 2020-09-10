import styled from 'styled-components';

export const ToolbarMargin = styled.div`
  ${({ theme }) => theme.mixins.toolbar}
  margin-bottom: 2.25em;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 1em;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    margin-bottom: 1.5em;
  }
`;
