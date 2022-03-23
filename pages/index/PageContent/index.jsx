import React from 'react';
import ContentHeader from './ContentHeader';
import MainContent from './MainContent';

function PageContent() {
  return (
    <div className='content-wrapper'>
      <ContentHeader />
      <MainContent />
    </div>
  );
}

export default PageContent;
