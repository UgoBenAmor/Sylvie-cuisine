import React from 'react'
import Link from "next/link"
import { urlFor } from '../Lib/Client'
import Image from 'next/image'
import Tag from '../pages/Tag'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
      
       
        <p className='paragraphe-intro'>
        Ce site, c’est avant tout : transmettre ce que j’ai appris, partager mon plaisir de cuisiner et conjurer le sort de la Junk Food ! Ça vous tente ? Et si on commençait par faire un tour du monde des saveurs : Méditerranée, Amériques, Tunisie et Maroc, Ailleurs en France, Sud-ouest, Asie, Desserts
        Choisissez ce qui vous plaît et Bon Appétit ! 
        </p>

        <div className='signature-sylvie'>
          <p>
            Sylvie B.
          </p>
      
        </div>

        <div className='link-container'>
       
        

        <Link href=""
        className ="link-hover">
        <p className='beats-solo'>
          Pâtes au saumon
        </p>
        </Link>
        </div>
        
      
        
      </div>
    </div>
  )
}

export default HeroBanner