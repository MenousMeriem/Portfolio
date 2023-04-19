import React from 'react'
import one from '../../assets/2.png'

function Cartetrois() {
  return (
    <div>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className= 'ml-10 mr-10 mt-14 mb-14 max-w-2xl max-h-screen rounded-lg leading-loose text-justify'> 
                    <h1 className="text-4xl font-bold">SkillsBuilders</h1>
                    <p className="py-2">SkillsBuilders est une application web de formation en ligne conçue avec plusieurs technologies 
                                        telles que React, HTML et Tailwind CSS. Elle propose une plateforme de cours en ligne de différents
                                        modules pour aider les apprenants à développer de nouvelles compétences et à progresser dans leur 
                                        carrière professionnelle. L'interface utilisateur de SkillsBuilders est construite avec React, 
                                        ce qui permet d'offrir une expérience utilisateur rapide et réactive. Elle est également optimisée 
                                        pour fonctionner sur différents appareils, ce qui vous permet d'accéder aux cours à tout moment, 
                                        où que vous soyez.
                                        Le design de l'interface utilisateur est créé avec HTML et Tailwind CSS, ce qui donne un aspect
                                        professionnel et moderne. Tailwind CSS est une bibliothèque de classes CSS prêtes à l'emploi, 
                                        ce qui facilite la création de styles personnalisés. Avec ces technologies, SkillsBuilders 
                                        est capable de créer une expérience utilisateur intuitive et agréable pour les apprenants.</p>
                    <div className='flex flex-row-reverse space-x-4 space-x-reverse '>
                        <button className="btn btn-outline btn-primary"> Détails </button>
                    </div>
                </div>
                <figure className="max-w-2xl max-h-screen shadow-violet-500/50"><img className='rounded-3xl' src={one}/></figure>
            </div>
 
        </div>
        
    </div>
       
  )
}

export default Cartetrois