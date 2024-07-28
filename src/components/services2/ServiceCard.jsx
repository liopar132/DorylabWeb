import { Grid } from '@mui/material'
import React from 'react'
import { useTailwindBreakpoints } from '../../hook/useTailwindBreakpoints'

function ServiceCard(props) {
  const {isMedium} = useTailwindBreakpoints();
  return (
    <Grid container direction={props.reverse ? "row-reverse " : ""}>
      <Grid item xs={12} md={6} className='px-4 py-4'>
        <div className={`flex flex-col justify-center h-full ${props.reverse ? 'text-left' : 'text-right'}`}>
          <h3 className={`text-3xl mb-2 font-bold ${isMedium? 'text-center' : ''} `}>{props.title}</h3>
          <p className={`font-thin ${isMedium? 'text-justify' : ''}`} >{props.children}</p>
          {/* TODO */}
          {/* <button className="w-fit rounded-md mt-4 bg-blue-500 text-white py-2 px-4">En savoir plus</button> */}
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={props.reverse 
          ? `transform transition duration-500 hover:scale-105 ${isMedium? '' : 'hover:-rotate-6'} hover:shadow-xl`
          : `transform transition duration-500 hover:scale-105 ${isMedium? '' : 'hover:rotate-6'} hover:shadow-xl`}>
            <img src={props.imgSrc} alt="Design & Installation"  class="w-full " />
        </div>
      </Grid>
    </Grid>
  )
  
}

export default ServiceCard