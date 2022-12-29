import React from 'react'

export default function NavBar() {
  return (
    <nav className='navbar'>
        <img src='../src/assets/LOGO.svg' className='logo'></img>
        <ul className='nav-links'>
            <li className='nav-link'><a href='#'>Accueil</a></li>
            <li className='nav-link'><a href="about">A propos</a></li>
        </ul>
    </nav>
  )
}
