import React from 'react';
import BannerCarousel from './BannerCarousel';
import HomePageContent from './HomePageContent';

const HomePage = () => {
  return (
    <>
      <BannerCarousel />
      <HomePageContent />
      {/* Any other components that should appear on the homepage */}
    </>
  );
};

export default HomePage;
