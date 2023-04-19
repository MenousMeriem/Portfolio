import React from 'react'
import Aboutme from '../Components/AboutMe/Aboutme'
import Hero from '../Components/Hero/Hero'
import MesProjets from '../Components/MesProjets/MesProjets'
import Carte from '../Components/MesServices/Carte'
import Experience from '../Components/Experience/Experience'
import ContactezMoi from '../Components/ContactezMoi/ContactezMoi'


function Acceuil() {
  return (
    <div>
        <Hero/>
        <Aboutme/>
        <MesProjets/>
        <Carte/>
        <Experience/>
        <ContactezMoi/>
    </div>
  )
}

export default Acceuil