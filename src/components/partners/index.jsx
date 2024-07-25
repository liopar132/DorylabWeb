import React from 'react'
import carrier_logo from './carrier.png'
import lg_logo from './LG-Logo.png'
import fitco_logo from './fitco.png'

function Partners() {
  return (
    <div className='container min-w-full py-4 px-10'>
      <div className='container mx-auto text-center	flex flex-col items-center'>
        <h1 className='text-5xl font-bold py-5'>Nos Partenaires</h1>
        <div className='flex flex-row justify-between w-2/4'>
          <img className='size-28 object-contain' src={lg_logo} alt="" />
          <img className='size-28 object-contain' src={carrier_logo} alt="" />
          <img className='size-28 object-contain' src={fitco_logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners;