import { makeStyles } from '@material-ui/styles';

export const useHeaderStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto',
    marginRight: '25px',
    display: 'flex'
  },
  selected: {
    color: 'white',
    background: 'transparent',
    borderBottom: '2px solid limegreen'
  }
}));

export const selectedCSS = {
  color: 'white',
  background: 'transparent',
  borderBottom: '2px solid limegreen'
};
