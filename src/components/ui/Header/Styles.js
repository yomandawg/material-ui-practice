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
  roundButton: {
    ...theme.typography.roundButton,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px'
  }
}));
