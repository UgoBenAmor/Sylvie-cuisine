import React from 'react'
import {Quisuisje, HeroBanner, Layout, Navbar} from "../components"
import Recipe from "./Recipe"
import {client} from '../Lib/Client'


const Home= ({recettes, bannerData, aboutData, aboutCategory}) => {
  return (
    <>
      <HeroBanner/>



      <div className='products-heading'>
        <h2>Les meilleures recettes</h2>
        <p>Et ses variantes</p>
       
      </div>
      <div className='recettes-container'>
        {recettes?.map((recipe)=><Recipe key={recipe._id} recipe={recipe}/>)}
        {console.log(recettes)}
      </div>
  
    </>
  )
}

export const getServerSideProps = async() =>{
  const query = '*[_type == "recette"]';
  const recettes = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const aboutQuery = '*[_type == "about"]';
  const aboutData = await client.fetch(aboutQuery);


  return{
    props:{recettes, bannerData, aboutData}
  }
}

export default Home





// const SearchBar = ({recettes}) => {
//   const [searchInput, setSearchInput] = useState("");

//   const recipes = [
//   {name:"Soupe au fromage",region:"Aveyron", id:"1"},
//   {name:"Flaune",region:"Aveyron" , id:"2"},
//   {name:"Daube de sanglier",region:"Aveyron", id:"3"},
//   {name:"Quiche lorraine",region:"Alsace", id:"4"},
//   {name:"Lasagnes",region:"Méditerranée", id:"5"},
//   {name:"Moussaka",region:"Méditerranée", id:"6"},
//   {name:"Hamburger",region:"Amériques", id:"7"},
//   {name:"Ribs BBQ",region:"Amériques", id:"8"},
//   {name:"Brownies",region:"Amériques", id:"9"}
//   ];

//   const handleChange = (e) => {
//       let value = e.target.value;
//       e.preventDefault();
//       setSearchInput(value);
//     };
    
//     if (searchInput.length > 0) {
//         recipes.filter((recipe) => {
//         return (
//           recipe.name.match(searchInput) 
//           );
       
//     });
//     }
   
  
// return (
//   <div className='wrapper'>
//       <div className="input">
//       <input
//           type="search"
//           placeholder="Rechercher ici"
//           onChange={handleChange}
//           />
//       </div>
      
//       <div className="soustitre">
//           <span>Recette</span>
//           <span>Région</span>
//       </div>


// {recipes.filter((val =>{
//   return (
//       val.name.toLowerCase().includes(searchInput.toLowerCase())||
//       val.region.toLowerCase().includes(searchInput.toLowerCase())

//   )
// })).map((val) => (
// <div key={val.id}className='tab-content'>
//   <span>{val.name}</span>
//   <span>{val.region}</span>
// </div>

// ))}
// </div>
// )}

// export default SearchBar