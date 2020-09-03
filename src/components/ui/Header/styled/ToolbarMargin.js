import styled from 'styled-components';

export default styled.div`
  ${({ theme }) => `
    ${theme.mixins.toolbar}
    margin-bottom: 3em;

    ${theme.breakpoints.down('md')} {
      margin-bottom: 2em;
    }

    ${theme.breakpoints.down('xs')} {
      margin-bottom: 1.25em;
    }
  `}
`;
