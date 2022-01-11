import React from 'react';
// component imports
import Header from '../layout/header/Header';
import Main from '../layout/main/Main';
import Footer from '../layout/footer/Footer';
import HomeFirstSection from '../organisms/sections/Home/1_HomeFirstSection/HomeFirstSection';
import HomeFormSection from '../organisms/sections/Home/2_HomeFormSection/HomeFormSection';
import HomeProcessSection from '../organisms/sections/Home/3_HomeProcessSection/HomeProcessSection';
import HomeGetInTouchBanner from '../organisms/sections/Home/5_HomeGetInTouchBanner/HomeGetInTouchBanner';
import HomeBrandsSection from '../organisms/sections/Home/6_HomeBrandsSection/HomeBrandsSection';
import HomeFAQSection from '../organisms/sections/Home/8_HomeFAQSection/HomeFAQSection';
import HomeServiceSection from '../organisms/sections/Home/4_HomeServiceSection/HomeServiceSection';
import HomeCustomerSection from '../organisms/sections/Home/7_HomeCustomerSection/HomeCustomerSection';
const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeFirstSection />
        <HomeFormSection />
        <HomeProcessSection />
        <HomeServiceSection/>
        <HomeGetInTouchBanner />
        <HomeBrandsSection />
        <HomeCustomerSection/>
        <HomeFAQSection/>
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
