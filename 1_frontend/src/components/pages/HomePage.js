import React from 'react';
// component imports
import Header from '../layout/header/Header';
import Main from '../layout/main/Main';
import Footer from '../layout/footer/Footer';
import HomeFirstSection from '../organisms/sections/Home/1_HomeFirstSection/HomeFirstSection';
const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeFirstSection />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
