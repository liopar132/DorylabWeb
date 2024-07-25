import React from 'react'
import header_image from './air-contionner.jpg'

function Header() {
  return (
    <div className='container min-w-full h-screen'>
      <img src={header_image} className='w-screen h-screen object-cover absolute -z-50'/>
      <div class="bg-gradient-to-r from-sky-950 w-screen h-screen absolute -z-40"></div>
      <div className='container mx-auto text-white flex flex-col justify-center h-full'>
        <h1 className='text-5xl font-bold'>DORYLAB</h1>
        <h2 className='text-3xl font-thin'>Something Somethign Somethign</h2>
        <p className='font-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Ipsam cum aut in perspiciatis vitae obcaecati neque</p>
        <br/>
        <button 
          className='bg-gradient-to-r from-blue-500 from-0% via-cyan-500 via-50% to-cyan-400 to-100% w-fit px-8 py-4 rounded-md font-bold
            hover:scale-105 transition-all duration-500
            bg-size-200 bg-pos-0 hover:bg-pos-100
            shadow-md'>
            Contactez-nous
        </button>
      </div>
    </div>
  )
}

export default Header;