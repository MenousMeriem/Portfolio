import React from 'react'

function Carte() {
  return (

    <div>

        <h1  className='text-5xl font-bold text-center mt-32 mb-10'> MES SERVICES </h1>

        <div className='grid gap-10 grid-cols-2 place-items-center text-white mt-10 mb-10 '>
            
            <div className="card w-96 bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-950 mt-10 mb-10 shadow-2xl shadow-indigo-500/50">
                <div className="card-body text-justify">
                    <h1 className="card-title text-2xl mb-5">Developpement WEB</h1>
                    <p> Mon travail de développement d'applications web consiste à créer des solutions informatiques sur mesure pour 
                        répondre aux besoins spécifiques de mes clients. J'utilise une variété de langages de programmation, 
                        tels que HTML, CSS, JavaScript et MySql pour créer des applications robustes et évolutives.</p>
                </div>
            </div>

            <div className="card w-96 bg-gradient-to-r from-violet-800 via-violet-600 to-violet-950 mt-10 mb-10 shadow-lg shadow-violet-500/50">
                <div className="card-body text-justify">
                    <h2 className="card-title text-2xl mb-5">Developpement Mobile</h2>
                    <p> En tant que développeur web, je suis expert dans l'utilisation de technologies telles que HTML, 
                        CSS et JavaScript pour créer des applications web responsives. <br /> J'utilise également des frameworks 
                        tels que Bootstrap et Tailwinds pour créer des interfaces utilisateur modernes et adaptatives.</p>
                </div>
            </div>

            <div className="card w-96 bg-gradient-to-r from-fuchsia-900 via-fuchsia-800 to-fuchsia-950 mt-10 mb-10 shadow-lg shadow-fuchsia-500/50">
                <div className="card-body text-justify">
                    <h2 className="card-title text-2xl mb-5">Maquettage avec Figma</h2>
                    <p> J'utilise Figma pour créer des maquettes d'interface utilisateur pour les applications web et mobiles.
                        Figma est un outil de conception collaboratif qui me permet de créer des maquettes de haute qualité,
                        tout en travaillant en étroite collaboration avec mes clients.
                        Figma me permet de créer des designs adaptatifs</p>
                </div>
            </div>

            <div className="card w-96 bg-primary bg-gradient-to-r from-cyan-900 via-cyan-600 to-cyan-950  mt-10 mb-10 shadow-lg shadow-cyan-500/50">
                <div className="card-body text-justify">
                    <h2 className="card-title text-2xl mb-5">Developpement WEB</h2>
                    <p> Mon travail de développement d'applications web consiste à créer des solutions informatiques sur mesure pour 
                        répondre aux besoins spécifiques de mes clients. J'utilise une variété de langages de programmation, 
                        tels que HTML, CSS, JavaScript et MySql, pour créer des applications robustes et évolutives.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Carte