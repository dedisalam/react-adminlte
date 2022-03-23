import React from 'react';
import ControlSidebar from './ControlSidebar';
import Footer from './Footer';
import MainSidebarContainer from './MainSidebarContainer';
import Navbar from './Navbar';
import PageContent from './PageContent';
import Preloader from './Preloader';

const index = () => {
  return (
    <>
      {/* <body class="hold-transition sidebar-mini layout-fixed"> */}
      <div className='wrapper'>
        <Preloader />
        <Navbar />
        <MainSidebarContainer />
        <PageContent />
        <Footer />
        <ControlSidebar />
      </div>
      {/* </body>  */}
    </>
  );
};

export default index;
