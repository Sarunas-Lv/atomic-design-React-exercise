import React from 'react';
// component imports
import Header from '../layout/header/Header';
import Main from '../layout/main/Main';
import Footer from '../layout/footer/Footer';
import HomeFirstSection from '../organisms/sections/Home/1_HomeFirstSection/HomeFirstSection';
import HomeFormSection from '../organisms/sections/Home/2_HomeFormSection/HomeFormSection';
import HomeProcessSection from '../organisms/sections/Home/3_HomeProcessSection/HomeProcessSection';
const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeFirstSection />
        <HomeFormSection />
        <HomeProcessSection />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
