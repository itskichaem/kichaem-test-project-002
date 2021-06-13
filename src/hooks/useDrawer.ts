import { useContext } from 'react';

import { UIContext } from 'src/contexts/UI';

const useDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(UIContext);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return { isDrawerOpen, closeDrawer, openDrawer, toggleDrawer };
};

export default useDrawer;
