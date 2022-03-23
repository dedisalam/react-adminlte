/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function SidebarUserPanel() {
  return (
    <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
      <div className='image'>
        <img
          src='dist/img/user2-160x160.jpg'
          className='img-circle elevation-2'
          alt='User Image'
        />
      </div>
      <div className='info'>
        <a href='#' className='d-block'>
          Alexander Pierce
        </a>
      </div>
    </div>
  );
}

export default SidebarUserPanel;
