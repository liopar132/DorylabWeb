import React, { useEffect } from 'react'
import header_image from './air-contionner.jpg'
import { Link } from 'react-router-dom';

function Header() {
  // paralax
  useEffect(() => {
    const handleScroll = () => {
      const parallaxImage = document.querySelector('.parallax-image');
      const scrolled = window.pageYOffset;
      parallaxImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='container min-w-full h-screen'>
      <img src={header_image} className='parallax-image w-full h-screen object-cover absolute -z-50 will-change-transform translate-y-0' alt='header' />
      <div class="bg-gradient-to-r from-sky-950 w-full h-screen absolute -z-40"></div>
      <div className='container mx-auto py-2 px-10 text-white flex flex-col justify-center h-full'>
        <h1 className='text-5xl font-bold'>
          DORYLAB <br/>
          <span className='text-3xl font-thin'>Leaders de la climatisation au Maroc</span>
        </h1>
        <br/>
        <p className='font-thin'>
          Particuliers ou profesionnels, Dorylab vous offre ces services de réparation,<br/>d'installation et d'entretien de vos équipements ou que vous soyez au Maroc.
        </p>
        <br/>
        
        <Link to='/contact'>
          <button 
            className='bg-gradient-to-r from-blue-500 from-0% via-cyan-500 via-50% to-cyan-400 to-100% w-fit px-8 py-4 rounded-md font-bold
              hover:scale-105 transition-all duration-500
              bg-size-200 bg-pos-0 hover:bg-pos-100
              shadow-md'
              >
            Contactez-nous
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header;