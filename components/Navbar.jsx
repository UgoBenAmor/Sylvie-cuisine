import React from 'react'
import Link from 'next/link'
import logoImage from '../public/logo.png'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div >
      
      <header className='navbar-container'>
        <Image src={logoImage} alt="logo" id='logoImage' width={250} height={144}/>
        
      </header>
      <ul className='nav-element'>
          
            <li className='nav-after'>
        <Link  href="/">
           Accueil
        </Link>
            </li>
      
      <li className='nav-after'>
        <Link  href="/Quisuisje">
           <a>Qui suis-je?</a>
        </Link>
      </li>
        
      <li className='nav-after'>
        <Link  href="/">
           Mes recettes
        </Link>
      </li>
        </ul>
     
    </div>
  )
}

export default Navbar