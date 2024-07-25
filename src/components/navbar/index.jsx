import React from 'react'
import dorylab_logo from './dorylab.png'

function Navbar() {
  return (
    <div className='container min-w-full py-2 px-10 absolute  top-0 left-0'>
      <div className='container mx-auto py-4 px-10 my-5 shadow-2xl flex flex-row justify-between bg-white items-center rounded-xl'>
          <img src={dorylab_logo} className='w-12'/>
          <menu className='h-fit flex flex-row justify-between gap-6'>
            <a className='h-fit' href='https://www.google.com'>Services</a>
            <a className='h-fit' href='https://www.google.com'>A Propos</a>
          </menu>
      </div>
    </div>
  )
}

export default Navbar;