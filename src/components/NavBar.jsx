import React from 'react'
import { Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='navbar'>
        <img src='/assets/LOGO.svg' className='logo'></img>
        <ul className='nav-links'>
            <li className='nav-link'><Link to='/'>Accueil</Link></li>
            <li className='nav-link'><Link to='/about'>A propos</Link></li>
        </ul>
    </nav>
  )
}
