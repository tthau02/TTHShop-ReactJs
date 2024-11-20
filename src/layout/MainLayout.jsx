import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Banner />
      <main className="content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
