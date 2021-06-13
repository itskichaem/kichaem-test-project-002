import { createMuiTheme, Theme } from '@material-ui/core/styles';

import Colors from 'src/constants/colors';

const theme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      contrastText: Colors.WHITE,
      dark: Colors.PRIMARY,
      light: Colors.PRIMARY_LIGHT,
      main: Colors.PRIMARY,
    },
  },
});

export default theme;
