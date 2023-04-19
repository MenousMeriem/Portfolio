import React from 'react'

function Layout() {
  return (
    <div className=''>
        
        {/* La barre de navigation  */}
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Accueil</a></li>
                <li><a>A propos de moi</a></li>
                <li><a> Portfolio</a></li>
                <li><a> Mes services </a></li>
                <li><a> Experiences </a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">Contactez moi</a>
            </div>
        </div>
    </div>
  )
}

export default Layout


