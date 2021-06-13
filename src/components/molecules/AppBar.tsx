import React from 'react';

import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import UI from 'src/constants/ui';
import useDrawer from 'src/hooks/useDrawer';

function AppBar() {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const classes = useStyles({ isOpen: isDrawerOpen });

  return (
    <MuiAppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Hello World
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

type StyleProps = {
  isOpen: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: ({ isOpen }: StyleProps) => (isOpen ? UI.DRAWER_WIDTH : 0),
    width: ({ isOpen }: StyleProps) => (isOpen ? `calc(100% - ${UI.DRAWER_WIDTH}px)` : '100%'),
    transition: ({ isOpen }: StyleProps) =>
      isOpen
        ? theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          })
        : theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
  },
  menuButton: {
    marginRight: 36,
    display: ({ isOpen }: StyleProps) => (isOpen ? 'none' : 'block'),
  },
}));

export default AppBar;
