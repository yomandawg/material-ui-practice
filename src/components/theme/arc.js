import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const smoothBlue = '#6774FF';
const creamyOrange = '#FFD19B';

export const arc = createMuiTheme({
  palette: {
    common: {
      blue: smoothBlue,
      orange: creamyOrange,
    },
    primary: {
      main: smoothBlue,
    },
    secondary: {
      main: creamyOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'white',
    },
    roundButton: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    th2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
    th3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: arcBlue,
    },
    th4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: arcBlue,
    },
  },
});
