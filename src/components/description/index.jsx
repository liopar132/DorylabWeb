import React, { useEffect, useState } from 'react'
import Ac from './air-conditioners-7558725_1280.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

// Custom hook to track window size
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the size correctly

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

const useTailwindBreakpoints = () => {
  const [width] = useWindowSize();

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  const isBreakpoint = (breakpoint) => {
    if (breakpoints[breakpoint] !== undefined) {
      return width >= breakpoints[breakpoint];
    }
    return false;
  };

  return {
    isSmall: isBreakpoint('sm'),
    isMedium: isBreakpoint('md'),
    isLarge: isBreakpoint('lg'),
    isXLarge: isBreakpoint('xl'),
    is2XLarge: isBreakpoint('2xl'),
  };
};

function Description() {
  const { isSmall, isMedium, isLarge, isXLarge, is2XLarge } = useTailwindBreakpoints();

  return (
    <div className='container min-w-full py-4 px-10 relative' style={{"height" : "575px"}}>
      <div className='w-4/5 max-w-7xl mx-auto bg-white shadow-2xl py-8 px-16 absolute left-1/2 -translate-x-1/2 -top-20'>
        <div className='container mx-auto text-center	flex flex-col items-center'>
          <h1 className='text-4xl font-bold'>Qui Sommes-Nous ?</h1>
          <h2 className='text-2xl'>Experts en climatisation et ventilation depuis plus de 25 ans.</h2>
          <p className='text-justify center w-full font-thin py-5' style={{"textAlignLast" : "center"}}>Dorylab Rabat est une société spécialisée dans les domaines de la climatisation et de la réfrigération avec plus de 15 ans d’expérience dans le secteur. Nous nous spécialisons dans la réparation, l’installation et l’entretien d’équipements de climatisation ,  domestiques, commerciaux et industriels, apportant un savoir faire technique.</p>
        </div>
        <div className='container mx-auto relative'>
          { isSmall &&
            <>
              <div class="bg-gradient-to-r from-white w-16 h-full absolute -left-1 z-20"></div>
              <div class="bg-gradient-to-l from-white w-16 h-full absolute -right-1 z-20"></div>
            </>
          }
          <Swiper
            spaceBetween={15}
            slidesPerView={isSmall ? 2 : 1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-1/6 w-full "
          >
            <SwiperSlide>
              <img src={Ac} alt="dorylab pics" srcset={Ac} className='w-full rounded-md'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ac} alt="dorylab pics" srcset={Ac} className='w-full rounded-md'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ac} alt="dorylab pics" srcset={Ac} className='w-full rounded-md'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ac} alt="dorylab pics" srcset={Ac} className='w-full rounded-md'/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Description;