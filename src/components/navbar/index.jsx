import React, { useState } from 'react'
import dorylab_logo from './dorylab.png'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTailwindBreakpoints } from '../../hook/useTailwindBreakpoints';



function Navbar() {
  const { isMedium } = useTailwindBreakpoints();
  const [isMenuOpen, setMenuOpen] = useState(false)
  const collapsedMenu = isMedium

  return (
    <div className='container min-w-full md:py-2 md:px-10 absolute top-0 left-0 z-50 '>
      <header 
        className='container mx-auto md:my-5 py-2 px-6  min-w-full
          flex flex-row justify-between items-center
          bg-white md:rounded-xl shadow-lg'
      >
          <Link to='/' className='flex items-center'>
           <img src={dorylab_logo} className='w-12' alt='dorylab'/>
          </Link>
          {
            collapsedMenu &&
            <menu className='h-fit flex flex-row justify-between gap-6 relative'>
              <button onClick={e => setMenuOpen(!isMenuOpen)}>
                <MenuIcon></MenuIcon>
              </button>
                <ul 
                  className={
                    `absolute right-0 top-6 bg-white shadow-md p-5 list-none w-max
                    duration-200 transition-transform 
                    ${isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`
                  }
                >  
                  <li>
                    <a className='h-fit w-fit text-sm hover:text-blue-500 duration-200' href='#services'>Services</a>
                  </li>
                  <li>
                    <a className='h-fit w-fit text-sm hover:text-blue-500 duration-200' href='#partners'>Partenaires</a>
                  </li>
                </ul>
            </menu>
          }
          {
            !collapsedMenu &&
            <menu className='h-fit flex flex-row justify-between gap-6'>
              <a className='h-fit w-fit text-sm hover:text-blue-500 duration-200' href='/#services'>Services</a>
              <a className='h-fit w-fit text-sm hover:text-blue-500 duration-200' href='/#partners'>Partenaires</a>
            </menu>
          }
      </header>
    </div>
  )
}

export default Navbar;