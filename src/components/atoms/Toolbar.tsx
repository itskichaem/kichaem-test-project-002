import { withStyles } from '@material-ui/core/styles';
import MuiToolbar from '@material-ui/core/Toolbar';

const Toolbar = withStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
  },
}))(MuiToolbar);

export default Toolbar;
