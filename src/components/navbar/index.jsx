import React from 'react'
import dorylab_logo from './dorylab.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container min-w-full py-2 px-10 absolute  top-0 left-0 z-50'>
      <div className='container mx-auto py-4 px-10 my-5 shadow-lg flex flex-row justify-between bg-white items-center rounded-xl'>
          <Link to='/'>
            <img src={dorylab_logo} className='w-12' alt='dorylab'/>
          </Link>
          <menu className='h-fit flex flex-row justify-between gap-6'>
            <a className='h-fit' href='https://www.google.com'>Services</a>
            <a className='h-fit' href='https://www.google.com'>A Propos</a>
          </menu>
      </div>
    </div>
  )
}

export default Navbar;