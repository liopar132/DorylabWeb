import React from 'react'
import Ac from './air-conditioners-7558725_1280.jpg'

function Description() {
  return (
    <div className='container min-w-full py-4 px-10'>
      <div className='container mx-auto text-center	flex flex-col items-center'>
        <h1 className='text-5xl font-bold py-5'>Qui Sommes-Nous ?</h1>
        <h2 className='text-3xl font-thin'>Experts en climatisation et ventilation depuis plus de 25 ans.</h2>
        <br/>
        <p className='text-justify center max-w-7xl' style={{"textAlignLast" : "center"}}>Dorylab Rabat est une société spécialisée dans les domaines de la climatisation et de la réfrigération avec plus de 15 ans d’expérience dans le secteur. Nous nous spécialisons dans la réparation, l’installation et l’entretien d’équipements de climatisation ,  domestiques, commerciaux et industriels, apportant un savoir faire technique.</p>
        <br/>
        <br/>
        <img src={Ac} alt="dorylab pics" srcset={Ac} className='max-w-xl w-3/5 rounded-xl mx-auto shadow-md'/>
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default Description;