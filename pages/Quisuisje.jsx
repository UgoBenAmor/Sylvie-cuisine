import React from 'react'
import Image from 'next/image'

const Quisuisje = () => {
  return (
    <div className="wrapper-quisuisje">
 <div className='quisuisje-container'>
      <div >
        <img src="/sylvie-img.jpeg" 
            alt="img-sylvie" 
            className='img-quisuisje'/>
             {/* <Image src="/sylvie-img.jpeg" 
                alt="img-sylvie" 
                width={200} 
                height={300}
                objectFit='cover'
                className='img-quisuisje'
               /> */}
                
      </div>
       <div className="p-quisuisje">
       <p className='p-cousin'>À Ugo, Léo, Nathalie et Geneviève</p>
       <p>Moi, c’est Sylvie ! 
        Mère de 2 bambins déjà bien grands et tante d’une nièce encore plus grande, je leur écris un livre de recettes en 2010 afin de leur communiquer le goût du bien manger! Aujourd’hui, c’est avec ce site que je souhaite étendre ma passion aux plus petits et grands enfants...
        </p>
       </div>
    </div>
    </div>
   
  )
}

export default Quisuisje