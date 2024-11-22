import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerSlider from '../components/BannerSlider';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <BannerSlider />
      <main className="content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
