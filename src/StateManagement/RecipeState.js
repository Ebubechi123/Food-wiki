import React,{createContext,useState} from 'react';

export const RecipeProvider = createContext();

export const  ReciepeState=(props)=>{

    const [recipies,setRecipes]  = useState([]);
    return(
        <>
        <RecipeProvider.Provider value={[recipies,setRecipes]}>
                {props.children}
        </RecipeProvider.Provider>
        </>
    )
}