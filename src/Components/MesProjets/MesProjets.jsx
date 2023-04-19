import React from 'react'
import Carteune from './Carteune'
import Cartedeux from './Cartedeux'
import Cartetrois from './Cartetrois'

function Cartes() {
  return (
    <div>
      
        <h1  className='text-5xl font-bold text-center mt-32 mb-10'> MES PROJETS </h1>
            
        {/* Carte Une : */}
        <Carteune/>
        {/* Carte Deux :  */}
        <Cartedeux/>
        {/* Carte Trois :  */}
        <Cartetrois/>
        
        <div className='flex justify-center mt-16 mb-8' >   
          <button class="btn btn-active  text-xl h-16 w-52 bg-gradient-to-r from-fuchsia-800 to-blue-500 hover:from-pink-500 hover:to-indigo-900">Voir tous</button>
        </div> 
    </div>
  )
}

export default Cartes