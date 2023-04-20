import React from 'react'
import {NavLink, Link, Outlet} from 'react-router-dom';

function Layout() {
  return (
    <div className=''>
        
        {/* La barre de navigation  */}
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <NavLink className="btn btn-ghost normal-case text-xl"></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'}>Accueil</NavLink></li>
                    <li><Link>A propos de moi</Link></li>
                    <li><Link> Portfolio</Link></li>
                    <li><Link> Mes services </Link></li>
                    <li><Link> Experiences </Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className="btn btn-primary">Contactez moi</NavLink>
            </div>
        </div>

        <main className=''>
            <Outlet/>
        </main> 
    </div>



  )
}



export default Layout


