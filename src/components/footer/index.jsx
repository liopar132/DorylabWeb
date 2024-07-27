import React from 'react'
import dorylab_logo from './dorylab.png'
import { Facebook, Google, Instagram } from '@mui/icons-material'

function Footer() {
  return (
    <div className='container min-w-full py-10 px-10 text-white'>
      <div className='container mx-auto'>
        <div className='container mx-auto w-fit flex flex-col gap-4 items-center pt-5'>
            <img src={dorylab_logo} alt="dorylabe logo" srcset={dorylab_logo} className='size-16' />
            <div className='flex flex-row gap-10'>
                <a target="_blank" rel="noreferrer" href='https://www.facebook.com/dorylabmaroc/'><Instagram fontSize='large' color='white'/></a>
                <a target="_blank" rel="noreferrer" href='https://www.facebook.com/dorylabmaroc/'><Facebook fontSize='large' color='white'/></a>
                <a target="_blank" rel="noreferrer" href='https://www.facebook.com/dorylabmaroc/'><Google fontSize='large' color='white'/></a>
            </div>
            <p className='font-thin'>Copyright Dorylab - 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Footer