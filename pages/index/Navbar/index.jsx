import React from 'react';
import LeftNavbarLinks from './LeftNavbarLinks';
import RightNavbarLinks from './RightNavbarLinks';

function Navbar() {
  return (
    <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
      <LeftNavbarLinks />
      <RightNavbarLinks />
    </nav>
  );
}

export default Navbar;
