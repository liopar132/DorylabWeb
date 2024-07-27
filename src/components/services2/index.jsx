import React from 'react';
import header_image from './air-contionner.jpg'
import { Grid } from '@mui/material';
import ServiceCard from './ServiceCard';

function Servies2() {
  return (
    <div className="container min-w-full px-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="container mx-auto text-center flex flex-col items-center">
        {/* <h1 className="text-5xl font-bold pb-10 pt-5">Nos Services</h1> */}
        <div className='max-w-5xl'>
          <Grid container  className=''>
            <Grid item md={12}>
              <ServiceCard title='DESIGN & INSTALLATION' imgSrc={header_image}>
                We offer a full range of installation services, including 'design and build' for cooling, heating & ventilation, water services and plumbing requirements. From large commercial buildings, including Shell & Core or CAT-A/B fit outs through hospitals and universities, to small Data Rooms and high end residential premises.
              </ServiceCard>
            </Grid>
            <Grid item md={12}>
              <ServiceCard title='MAINTENANCE PLANNIFIE' imgSrc={header_image} reverse>
              Accent Services was formed by service engineers, not salesmen. Unlike many manufacturers or general contractors, a deep product and system knowledge is at our heart and we provide our clients with a first class preventative maintenance schedule.
              </ServiceCard>
            </Grid>
            <Grid item md={12}>
              <ServiceCard title='REPARATION' imgSrc={header_image} >
                We offer a full range of installation services, including 'design and build' for cooling, heating & ventilation, water services and plumbing requirements. From large commercial buildings, including Shell & Core or CAT-A/B fit outs through hospitals and universities, to small Data Rooms and high end residential premises.
              </ServiceCard>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Servies2;
