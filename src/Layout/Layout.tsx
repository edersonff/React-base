import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.scss';

function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div className='layout-container'>
            <Header/>
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;