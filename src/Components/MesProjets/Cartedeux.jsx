import React from 'react'
import one from '../../assets/3.png'


function Cartedeux() {
  return (
    <div>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <figure className="max-w-2xl max-h-screen "><img className='rounded-3xl' src={one}/></figure>
                <div className= 'ml-10 mr-10 mt-14 mb-14 max-w-2xl max-h-screen rounded-lg leading-loose text-justify'> 
                    <h1 className="text-4xl font-bold">PharmaDon</h1>
                    <p className="py-2"> Pharmadon est une application web conçue pour aider les associations et les pharmacies à gérer 
                                         leur stock de médicaments et leurs activités en ligne. Elle est construite avec plusieurs technologies
                                         telles que HTML, CSS, JS, React, Tailwind CSS et MongoDB pour offrir une expérience utilisateur rapide 
                                         et efficace. Grâce à Pharmadon, les associations et les pharmacies peuvent facilement gérer leur stock 
                                         de médicaments, suivre les prescriptions et les ordonnances, et traiter les paiements en ligne. 
                                         L'interface utilisateur est conçue pour être simple et facile à utiliser. Pharmadon est construit 
                                         avec React, qui permet une expérience utilisateur rapide et réactive. Tailwind CSS est utilisé pour 
                                         le design de l'interface utilisateur, donnant une apparence professionnelle et moderne à l'application. 
                                         MongoDB est utilisé pour stocker les données, ce qui permet une gestion efficace et fiable des 
                                         informations de l'application. En résumé, Pharmadon est une application web construite avec HTML, CSS, 
                                         JavaScipt, React, Tailwind CSS et MongoDB, conçue pour aider les associations et les pharmacies à gérer 
                                         leur stock de médicaments et leurs activités en ligne.</p>
                    <div className='flex flex-row-reverse space-x-4 space-x-reverse '>
                        <button className="btn btn-outline btn-primary"> Détails </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
  )
}

export default Cartedeux