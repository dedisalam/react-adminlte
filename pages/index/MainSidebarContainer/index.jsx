import React from 'react';
import BrandLogo from './BrandLogo';
import Sidebar from './Sidebar';

function MainSidebarContainer() {
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      <BrandLogo />
      <Sidebar />
    </aside>
  );
}

export default MainSidebarContainer;
