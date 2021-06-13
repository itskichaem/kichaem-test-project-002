/* eslint-disable no-magic-numbers */
import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Toolbar from 'src/components/atoms/Toolbar';
import UI from 'src/constants/ui';
import useDrawer from 'src/hooks/useDrawer';

type StyleProps = {
  isOpen: boolean;
};

function NavigationSidebar() {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const classes = useStyles({ isOpen: isDrawerOpen });

  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <Toolbar>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
    </Drawer>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: UI.DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    '&, .MuiPaper-root': {
      overflowX: ({ isOpen }: StyleProps) => (isOpen ? 'auto' : 'hidden'),
      width: ({ isOpen }: StyleProps) => (isOpen ? UI.DRAWER_WIDTH : theme.spacing(7) + 1),
      transition: ({ isOpen }: StyleProps) =>
        isOpen
          ? theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            })
          : theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
      [theme.breakpoints.up('sm')]: {
        width: ({ isOpen }: StyleProps) => (isOpen ? UI.DRAWER_WIDTH : theme.spacing(9) + 1),
      },
    },
  },
}));

export default NavigationSidebar;
