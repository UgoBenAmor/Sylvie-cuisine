import React from 'react'
// ../COMPONENT
import { client, urlFor } from '../../lib/client';
import { useState } from 'react';
import {PortableText} from '@portabletext/react'
import Image from 'next/image';
import Tag from '../Tag'
import { Category } from '@material-ui/icons';



const RecetteDetail = ({recette, recettes}) => {
  const { image, name, temps, indications, chapitre } = recette;
  const [index, setIndex] = useState(0);
  return (
    <div className='hellorecipe'>
            <div>
           
      <img className='img-recipe'
            src={urlFor(image && image[index])}/>
            </div>

            <div className="indic">
              <PortableText value={indications}/>
            {/* {indications[0].children[0].text}
            {indications[0].children[1].text} */}
            </div>

             <div className="recipecontent">  
             <h2>{name}</h2>
            <span> {temps} minutes de préparation environ </span>
            <span> {chapitre}</span>
            
            
            

            </div>
      
    </div>
  )
}

export default RecetteDetail;

export const getStaticPaths = async () => {
  const query = `*[_type == "recette"] {
    slug {
      current
    }
  }
  `;
  const recettes = await client.fetch(query);
  const paths = recettes.map((recette) => ({
    params: { 
      slug: recette.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "recette" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "recette"]'
  
  const recette = await client.fetch(query);
  const recettes = await client.fetch(productsQuery);


  return {
    props: { recettes, recette }
  }
}