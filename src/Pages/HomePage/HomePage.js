import React,{useEffect,useState,useContext} from 'react';
import '../HomePage/HomePage.css';
import Input from '../../Components/Form/Form';
import { RecipeProvider } from '../../StateManagement/RecipeState';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart,faSearch } from "@fortawesome/free-solid-svg-icons";
import Title from '../../Components/Title/Title';
import PotatoChips from '../../Assets/Images/Potato chips.jpg';
import ChickenNoodles from '../../Assets/Images/Chicken Noodles.jpg';
import Lasagne from '../../Assets/Images/Lasagne.jpg';
import { Link } from "react-router-dom";
import Nav from '../../Components/Navigation/Nav';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';
import Recipie from '../RecipePage/RECIPIE';


const Home = () => {
  library.add(faSearch,faHeart);

  // STATES
  const [query,setQuery]  = useState('');
  const [search,setSearch]  = useState('');
  const [recipies,setRecipes]  = useContext(RecipeProvider)
  const [toggle,setToggle] = useState(false);
  const [fetching, setFetching] = useState(false)
  // API
  const APP_ID = '5ddbe0d6';
  const APP_KEY ="e8f427a84d00ddd574e698e7ece8cece";


// `  https://api.edamam.com/v2/{id}`
  const getAPI = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data =await  response.json();
    setRecipes(data.hits)
    setFetching(true)
    console.log(recipies)
}

// const getAPI = async ()=>{
//   const response = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
//   const data = await response.json();
//   console.log(response)
// }

// FUNCTIONS
  const updateSearch=(e)=>{
  setSearch(e.target.value)
  console.log(search)
}

  const getSearch= (e) =>{
  e.preventDefault();
  setFetching(false);
  setQuery(search);
  setSearch('');
  console.log(recipies)
}

useEffect(async()=>{
  console.log('hello');
  getAPI();
},[query])

  const Toggle =(e) =>{
    setToggle(!toggle);
    setQuery("");
    setSearch("")
  };



    return (
        <>
        <div className="container">
            <Nav />

          <div className="header">
            <header>
              <div className="header-title">
                <h1>SEACRH FOR OVER 1000 RECIPES...</h1>
              </div>
          <div className="search-input">
          <div className="root">
            <form onSubmit={(e)=>{    
          Toggle(e);
          getSearch(e);
            }} >
            <Input  onChange={updateSearch} value={search} type="text"  placeholder="Search..." />
            </form>
          </div>
          <div className="search">
          <FontAwesomeIcon  onClick={(e)=>{
            Toggle(e);
            getSearch(e)
          }} className="search-icon" icon="search" />
          </div>
          </div>
            </header>
          </div>

          <div className="trending-dishes-wrapper">
          <div className="trending-dishes">
            <div className="trending-dishes-title">
              <Title>Trending Dishes</Title>
              <span>
                See all
              </span>
            </div>
            <div className="trending-dishes-tab">
            
            <div className="trending-dishes-tab-col">
              <Link to="/recipepage">
              <img src={ChickenNoodles} alt="" />
              <div className="dish-name"><p>Chicken Noodles</p></div>
              </Link>
              </div>
              <div className="trending-dishes-tab-col">
              <img src={Lasagne} alt="" />
              <div className="dish-name"><p>Lasagne</p></div>
              </div>
              <div className="trending-dishes-tab-col">
              <img src={PotatoChips} alt="" />
              <div className="dish-name"><p>Potato Chips</p></div>
              </div>
            </div>
            </div>
          </div>
          <div className="recommend-dishes-wrapper">
               <div className="recommended-dishes">
                 <div className="recommended-dishes-title">
                 <Title>Recommended Dishes</Title>
              <span>
                See all
              </span>
                 </div>

                 <div className="recommended-dishes-tab">
                   <div className="col-2">
                   <div className="col-2-img">
                   <img src={ChickenNoodles} alt="" />
                   </div>
                     <div className="info">
                       <h5>Noodles</h5>
                       <div className="crumbs">
                         <p>25min</p>
                         <p>25 Recipes</
                         p>
                       </div>
                     </div>
                     <div className="favourite-icon">
                     <FontAwesomeIcon className="not-selected" icon="heart" />
                     </div>
                     <div className="re-cook-button">
                       <span>Re-cook</span>
                     </div>
                   </div>



                   <div className="col-2">
                   <div className="col-2-img">
                   <img src={PotatoChips} alt="" />
                   </div>
                     <div className="info">
                       <h5>Fruit Salad</h5>
                       <div className="crumbs">
                         <p>25min</p>
                         <p>25 Recipes</p>
                       </div>
                     </div>
                     <div className="favourite-icon">
                     <FontAwesomeIcon icon="heart" />
                     </div>
                     <div className="re-cook-button selected">
                       <span>Re-cooked</span>
                     </div>
                   </div>



                   <div className="col-2">
                   <div className="col-2-img">
                   <img src={Lasagne} alt="" />
                   </div>
                     <div className="info">
                       <h5>Rice</h5>
                       <div className="crumbs">
                         <p>25min</p>
                         <p>25 Recipes</p>
                       </div>
                     </div>
                     <div className="favourite-icon">
                     <FontAwesomeIcon className="not-selected" icon="heart" />
                     </div>
                     <div className="re-cook-button">
                       <span>Re-cook</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
              <div  className={toggle ? `turn-on` : `display-results-wrapper` }>
              <div className="display-results">
              <div className="close">
                  <FontAwesomeIcon  onClick={(e)=>Toggle(e)}  icon="window-close" />
                </div>
              { !fetching && <Loader/>}

              {fetching && recipies.length===0 && search.trim!=="" &&
                  <div className="database-error"> <p >Food Not Found In Our Database</p></div>
              }
                { fetching && recipies.map(recipe=>(
                <Recipie recipe={recipe} key={recipe.recipe.label}  />
             ))}
              </div>
              </div>

             <Footer />
        </div>
        </>
      );
}
 
export default Home;