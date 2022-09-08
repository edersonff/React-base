import React from 'react';
import { Link } from 'react-router-dom';
import './HalfPage.scss';

function HalfPage({children, color} : { children: React.ReactNode, color?: string }) {
  return (
    <div className='halfpage-container' style={{backgroundColor: color}}>
        {children}
    </div>
  );
}

export default HalfPage;
