import React from 'react';
// component imports
import Header from '../layout/header/Header';
import Main from '../layout/main/Main';
import Footer from '../layout/footer/Footer';
import HomeFirstSection from '../organisms/sections/Home/1_HomeFirstSection/HomeFirstSection';
import HomeFormSection from '../organisms/sections/Home/2_HomeFormSection/HomeFormSection';
const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeFirstSection />
        <HomeFormSection />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
