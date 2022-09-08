import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Error from './Error/Error';
import Header from './Header/Header';
import Layout from './Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Layout>
  </Router>
);
