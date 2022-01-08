import React from 'react';
// component imports
import Header from '../layout/header/Header';
import Main from '../layout/main/Main';
import Footer from '../layout/footer/Footer';
import HomeFirstSection from '../organisms/sections/Home/1_HomeFirstSection/HomeFirstSection';
import HomeFormSection from '../organisms/sections/Home/2_HomeFormSection/HomeFormSection';
import HomeProcessSection from '../organisms/sections/Home/3_HomeProcessSection/HomeProcessSection';
import HomeGetInTouchBanner from '../organisms/sections/Home/HomeGetInTouchBanner/HomeGetInTouchBanner';
import HomeBrandsSection from '../organisms/sections/Home/6_HomeBrandsSection/HomeBrandsSection';
const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeFirstSection />
        <HomeFormSection />
        <HomeProcessSection />
        <HomeGetInTouchBanner />
        <HomeBrandsSection />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
