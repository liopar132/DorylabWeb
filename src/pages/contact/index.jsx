import React from 'react'
import ContactForm from '../../components/contact-form';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function ContactPage() {
  return (
    <>
      <Navbar></Navbar>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  )
}

export default ContactPage;