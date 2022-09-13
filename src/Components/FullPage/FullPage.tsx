import React from 'react';
import { Link } from 'react-router-dom';
import './FullPage.scss';

function FullPage({children} : { children: React.ReactNode }) {
  return (
    <div className='fullpage-container'>
        {children}
    </div>
  );
}

export default FullPage;
