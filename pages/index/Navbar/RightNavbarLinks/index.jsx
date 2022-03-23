/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MessageDropdownMenu from './MessageDropdownMenu';
import NavbarSearch from './NavbarSearch';
import NotificationsDropdownMenu from './NotificationsDropdownMenu';

function RightNavbarLinks() {
  return (
    <ul className='navbar-nav ml-auto'>
      <NavbarSearch />
      <MessageDropdownMenu />
      <NotificationsDropdownMenu />
      <li className='nav-item'>
        <a
          className='nav-link'
          data-widget='fullscreen'
          href='#'
          role='button'
        >
          <i className='fas fa-expand-arrows-alt' />
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link'
          data-widget='control-sidebar'
          data-controlsidebar-slide='true'
          href='#'
          role='button'
        >
          <i className='fas fa-th-large' />
        </a>
      </li>
    </ul>
  );
}

export default RightNavbarLinks;
