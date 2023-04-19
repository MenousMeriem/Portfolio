import React from 'react'
import one from '../../assets/1.png'


function Carteune() {
  return (
    <div>
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className= 'ml-10 mr-10 mt-14 mb-14 max-w-2xl max-h-screen rounded-lg leading-loose text-justify'> 
                    <h1 className="text-4xl font-bold">Escape</h1>
                    <p className="py-2"> Mon application WEB est conçu pour aider les amateurs de décoration intérieure à trouver l'inspiration 
                    pour créer un intérieur confortable et élégant. J'ai utilisé des technologies web telles que HTML, CSS et JavaScript 
                    pour créer une expérience utilisateur fluide et intuitive. Sur cette application WEB, vous trouverez des images de haute qualité 
                    de différents styles de décoration intérieure, ainsi que des descriptions détaillées pour vous guider dans votre choix. 
                    Nous avons également ajouté des fonctionnalités interactives telles que des galeries d'images et des boutons. Nous avons 
                    également inclus des astuces de décoration intérieure pour vous aider à tirer le meilleur parti de chaque pièce de votre maison. 
                    Nous avons utilisé JavaScript pour créer des menus déroulants et des onglets pour rendre la navigation sur notre site 
                    encore plus facile et agréable.
                    Que vous cherchiez des idées de décoration pour votre salon, votre cuisine, votre chambre ou votre bureau, notre site web 
                    est l'endroit idéal pour trouver l'inspiration dont vous avez besoin.</p>
                    <div className='flex flex-row-reverse space-x-4 space-x-reverse '>
                        <button className="btn btn-outline btn-primary"> Détails </button>
                    </div>
                </div>
                <figure className="max-w-2xl max-h-screen "><img className='rounded-3xl' src={one}/></figure>
            </div>
        </div>
    </div>
      
  )
}

export default Carteune


            
            
      