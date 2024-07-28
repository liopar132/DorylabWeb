import React from 'react'
import carrier_logo from './carrier.png'
import lg_logo from './LG-Logo.png'
import fitco_logo from './fitco.png'
import panasonic_logo from './panasonic.png'
import toshiba_logo from './Toshiba-logo.png'

function Partners() {
  return (
    <div id='partners' className='container min-w-full my-16 py-4 px-10 bg-white shadow-xl' >
      <div className='container max-w-7xl mx-auto text-center	flex flex-col'>
        <h2 className='text-5xl font-bold pb-5'>Nos Partenaires</h2>
        <div className='flex flex-row flex-wrap justify-around gap-x-4'>
          <img className='size-28 object-contain' src={lg_logo} alt="" />
          <img className='size-28 object-contain' src={carrier_logo} alt="" />
          <img className='size-28 object-contain' src={fitco_logo} alt="" />
          <img className='size-28 object-contain' src={panasonic_logo} alt="" />
          <img className='size-28 object-contain' src={toshiba_logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners;