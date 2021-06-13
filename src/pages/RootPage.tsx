import React from 'react';

import AppBar from 'src/components/molecules/AppBar';
import NavigationSidebar from 'src/components/molecules/NavigationSidebar';
import MainTemplate from 'src/components/templates/MainTemplate';
import Routes from 'src/routes/RootPageRoutes';

function RootPage() {
  return (
    <MainTemplate sidebar={<NavigationSidebar />} header={<AppBar />}>
      <Routes />
    </MainTemplate>
  );
}

export default RootPage;
