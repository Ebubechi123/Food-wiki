import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Nav from '../Components/Navigation/Nav';
import Home from '../Pages/HomePage/HomePage';
import Reciepe from '../Pages/RecipePage/Recipe';
const Pages = () => {
    return (

        <>
        <Route exact={true} path="/home" component={Home} />
        {/* <Route exact={true} path="/recipe/:id" component={Reciepe} /> */}
        </>
      );
}
 
export default Pages;