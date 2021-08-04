import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from "../../Components/Button/Button"

const Recipie = ({recipe}) => {

// useEffect(()=>{
  
//   window.location = window.location.replace(/#/,'');
// })
    return (

        <>

<div key={recipe.recipe.label} className="col-3">
                <div className="display-results-image">
           
             <img src={recipe.recipe.image} />
                {/* /series/${series.show.id} */}
                </div>
                <div className="display-results-info">
                  <p>Name: {recipe.recipe.label}</p>
                  <p>Cuisine Type : {recipe.recipe.cuisineType|| '-'}</p>
                  <p>DietLabel : {recipe.recipe.dietLabels|| '--'}</p>

                </div>
                <Link to={{pathname:`${recipe.recipe.url}`}} target="_blank">
                <Button>View</Button>
         </Link>
       
                </div>
        </>
      );
}
 
export default Recipie;