import React from 'react'
import react_logo from './dorylab.png'

function Navbar() {
  return (
    <div className='container min-w-full py-4 px-10 shadow-md bg-white absolute top-0 left-0'>
      <div className='container mx-auto flex flex-row justify-between items-center'>
          <img src={react_logo} className='w-12'/>
          <menu className='h-fit flex flex-row justify-between gap-6'>
            <a className='h-fit' href='https://www.google.com'>Services</a>
            <a className='h-fit' href='https://www.google.com'>A Propos</a>
          </menu>
      </div>
    </div>
  )
}

export default Navbar;