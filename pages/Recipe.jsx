import React from 'react'
import Link from 'next/link'
import { urlFor } from '../Lib/Client'
import Tag from './Tag'


const Recipe = ({recipe:{ image, name, slug, temps, indications, chapitre}}) => {
  return (
    <>
        <div className='recipe-card'>
          <img 
              src={urlFor(image && image[0])} 
              alt=""
              width={250}
              height={250}
              className='product-image' 
              />
              <p className='recipe-name'>{name}
          {/* <img className='image-coeur'
              src='coeur.png'
              width={20}
              height={17}
              /> */}
              </p>
              <p className='recipe-type'>{chapitre} </p>
              <p className='recipe-time'>Temps: {temps} min</p>
              
              <Link href={`/recettes/${slug.current}`}>
              <button type='button' className='recipe-button'>
                J'ai faim !
              </button>
              </Link>

              
        </div>
   
    </>
  )
}

export default Recipe