import React from 'react'
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Partners from '../../components/partners';
import Footer from '../../components/footer';
import Description from '../../components/description';

function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Description></Description>
      <Partners></Partners>
      <Footer></Footer>
    </>
  )
}

export default LandingPage;