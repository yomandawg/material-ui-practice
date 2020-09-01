import { makeStyles } from '@material-ui/styles';

export const useHeaderStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto',
    marginRight: '25px',
    display: 'flex'
  }
}));

export const selectedCSS = {
  color: 'white',
  background: 'transparent',
  borderBottom: '2px solid limegreen'
};
