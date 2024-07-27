import React from 'react'
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Partners from '../../components/partners';
import Footer from '../../components/footer';
import Description from '../../components/description';
import Servies2 from '../../components/services2';

function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Description></Description>
      <Servies2></Servies2>
      <Partners></Partners>
      <Footer></Footer>
    </>
  )
}

export default LandingPage;