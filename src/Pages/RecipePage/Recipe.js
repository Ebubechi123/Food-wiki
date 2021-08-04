import React,{useEffect,useState,useContext} from 'react';
import '../RecipePage/Recipe.css';
// import ChickenNoodles from '../../Assets/Images/Chicken Noodles.jpg';
// import PotatoChips from '../../Assets/Images/Potato chips.jpg';
// import Lasagne from '../../Assets/Images/Lasagne.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faClock, faStar,faFire } from "@fortawesome/free-solid-svg-icons";
import Title from '../../Components/Title/Title';
import Nav from '../../Components/Navigation/Nav';
import { RecipeProvider } from '../../StateManagement/RecipeState';
const Reciepe = ({match}) => {
    library.add(faSearch,faHeart,faClock, faStar,faFire );
    // https://api.edamam.com/v2/${id}
    // /api/recipes/v2/${id}
    
const [recipies,setRecipes] = useContext(RecipeProvider)
    const GetApi = async()=>{
      // try{
        // const proxy = "http://cors-anywhere.herokuapp.com/"
        // const {id} = props.match.params
      //   const api = `${proxy}https://api.edamam.com/api/recipes/v2/${id}`
      // const response = await fetch(api)
      // console.log('Data ?' , response.json())
      
      // }
      
      // catch(error){
      //   console.log('Whats Happening')
      //   console.error(error)
      // }
      // const proxy = "https://api.allorigins.win/raw?url="
  
      const api_call =fetch(`https://api.edamam.com/api/recipes/v2/${match.params.id}`
      )
      
      const data = (await api_call).json();
      console.log(data)
      console.log(match);

    

    }
useEffect(()=>{
  
//   let url = new URL(`http://localhost:3000//recipe/${recipies.recipie}`);
// let params = new URLSearchParams(url.search);
// console.log(url)
// Delete the foo parameter.
// params.delete(''); //Query string is now: 'bar=2'

const queryString = window.location.search;
console.log(queryString);
})



// const api_call = fetch(
//   `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
// ).then(res => res.json()).then(console.log);
    return ( 

      

      
        <>
            <div className="container">
       <Nav />
          {/* <div className="recipe-title">
              <h1>Chicken Noodles</h1>
        <FontAwesomeIcon className="not-selected heart" icon="heart" />
          </div>

         <div className="recipe-header">
         <div className="recipe-img">
              <img src={ChickenNoodles} alt="chickenoodles" />
          </div>

          <div className="recipe-crumbs">
         <div className="recipe-crumbs-col">
         <FontAwesomeIcon icon="clock" />
         <div className="description">
           <p> 45min</p>
         </div>
         </div>


         <div className="recipe-crumbs-col">
         <FontAwesomeIcon icon="star" />
         <div className="description">
           <p> 8.5 rate</p>
         </div>
         </div>


         <div className="recipe-crumbs-col">
         <FontAwesomeIcon  icon="fire" />
         <div className="description">
           <p> 2.5 kcal</p>
         </div>
         </div>
          </div>
         </div> */}


      {/* <section className="ingredients-section">
        <div className="ingrdients-title">
          <Title className="ingredient-title">Ingredients</Title>
        </div>
        <div className="row">

          <div className="ingredients-col">
            <img src={Lasagne}alt="" />
            <div className="ingredient-name">
              <p>Lasagne</p>
            </div>
            <div className="ingredient-info">
              <p>300g</p>
            </div>
          </div>
          

          <div className="ingredients-col">
            <img src={Lasagne}alt="" />
            <div className="ingredient-name">
              <p>Lasagne</p>
            </div>
            <div className="ingredient-info">
              <p>300g</p>
            </div>
          </div>

          <div className="ingredients-col">
            <img src={Lasagne}alt="" />
            <div className="ingredient-name">
              <p>Lasagne</p>
            </div>
            <div className="ingredient-info">
              <p>300g</p>
            </div>
          </div>

        </div>
      </section> */}
<h1>Hello Re</h1>
            </div>
        </>
     );
}
 
export default Reciepe;