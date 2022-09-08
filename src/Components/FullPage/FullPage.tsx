import React from 'react';
import { Link } from 'react-router-dom';
import './HalfPage.scss';

function FullPage({children} : { children: React.ReactNode }) {
  return (
    <div className='halfpage-container'>
        {children}
    </div>
  );
}

export default FullPage;
