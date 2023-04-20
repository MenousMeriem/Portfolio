import React from 'react'
import image from '../../assets/Profile.jpg'

function Aboutme() {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {/* <div className=' border-emerald-400 mr-10  bg-red-600' > </div> */}
                <figure className="max-w-2xl max-h-screen "><img className='rounded-3xl' src={image}/></figure>
                <div className= 'ml-10 max-w-2xl max-h-screen rounded-lg leading-loose text-justify'>
                    <h1 className="text-5xl font-bold">A PROPOS DE MOI </h1>
                    <p className="py-6">En tant qu'ingénieure en informatique et développeuse Full Stack, j'ai acquis une solide expérience dans 
                    le développement d'applications web de bout en bout en utilisant une variété de langages et de technologies.
                    J'ai une connaissance approfondie des principes de développement frontend et backend, ainsi que de la gestion de bases
                    de données, ce qui me permet de créer des applications web robustes et évolutives."
                    Mon expérience en tant que développeuse Full Stack inclut la conception et la mise en œuvre de solutions d'intégration 
                    de systèmes, la gestion de projets de développement logiciel et la création d'interfaces utilisateur conviviales et responsives.
                    Je suis passionnée par la création de solutions informatiques innovantes qui répondent aux besoins des utilisateurs.
                    Mon approche centrée sur l'utilisateur m'a permis de créer des applications web performantes et faciles à utiliser 
                    pour mes clients."</p>
                    <div className='flex flex-row-reverse space-x-4 space-x-reverse '>
                        <button className="btn btn-outline btn-primary"> Mon CV </button>
                        <button className="btn btn-primary">Engagez moi </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme