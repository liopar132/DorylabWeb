import { Grid } from '@mui/material'
import React from 'react'

function ServiceCard(props) {
  console.log(props.reverse)
  let theReversal = props.reverse ? "row-reverse" : ""
  let theReversalText = props.reverse ? 'text-left center px-4 py-4' :'text-right center px-4 py-4' 
  let theReversalItems = props.reverse ? 'flex flex-col justify-center h-full' : 'flex flex-col items-end justify-center h-full'
  return (
    <Grid container direction={theReversal} className=''>
      <Grid item xs={12} md={6} className={theReversalText}>
        <div className={theReversalItems}>
          <h2 className="text-3xl mb-2 font-bold">{props.title}</h2>
          <p className='font-thin' >{props.children}</p>
          {/* TODO */}
          {/* <button className="w-fit rounded-md mt-4 bg-blue-500 text-white py-2 px-4">En savoir plus</button> */}
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={props.reverse 
          ? "transform transition duration-500 hover:scale-105 hover:-rotate-6 hover:shadow-xl"
          : "transform transition duration-500 hover:scale-105 hover:rotate-6 hover:shadow-xl"}>
            <img src={props.imgSrc} alt="Design & Installation"  class="w-full " />
        </div>
      </Grid>
    </Grid>
  )
  
}

export default ServiceCard