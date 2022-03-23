import React from 'react';
import SidebarMenu from './SidebarMenu';
import SidebarSearchForm from './SidebarSearchForm';
import SidebarUserPanel from './SidebarUserPanel';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarUserPanel />
      <SidebarSearchForm />
      <SidebarMenu />
    </div>
  );
}

export default Sidebar;
