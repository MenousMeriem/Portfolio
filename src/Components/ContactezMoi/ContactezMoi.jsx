import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'

function ContactezMoi() {
  return (
    <div>
        <div className=' rounded-t-[100px] bg-gradient-to-r from-cyan-800 via-fuchsia-800 to-indigo-900
         shadow-lg shadow-fuchsia-500/50'>

            <h1 className='text-5xl font-bold text-center mb-10 '>  CONTACTEZ-MOI </h1>

            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold"> N'hésitez pas à me contacter !</h1>
                        <p className="py-6 text-xl text-justify">N'hésitez pas à me contacter si vous avez des questions ou des commentaires sur mon travail. 
                        Je suis toujours ouvert à de nouvelles opportunités de collaboration et je suis disponible pour répondre 
                        à vos demandes de renseignements.</p>
                        
                        <h1> <BsFillTelephoneFill/> +213 549 032 413 </h1>
                        <h1> <MdEmail/> meriemmenous1@gmail.com</h1>
                        <h1> <ImLocation2/> Alger / Tipaza / Blida </h1> 
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Votre nom / Nom d'entreprise </span>
                                </label>
                                <input type="text" placeholder="Votre nom ou nom d'entreprise" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea placeholder="Votre message" className="textarea textarea-bordered textarea-lg " ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Envoyer</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactezMoi