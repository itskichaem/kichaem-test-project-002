import React from 'react';

import Box from '@material-ui/core/Box';

import Toolbar from 'src/components/atoms/Toolbar';

type Props = {
  children: React.ReactNodeArray | React.ReactNode;
  header: React.ReactNodeArray | React.ReactNode;
  sidebar: React.ReactNodeArray | React.ReactNode;
};

function MainLayout({ children, header, sidebar }: Props) {
  return (
    <Box display="flex">
      {header}
      {sidebar}
      <Box padding={3} width="100%">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;
