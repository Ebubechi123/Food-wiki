import React from 'react';
import { Route,Switch } from 'react-router-dom';
// import Home from '../HomePage/HomePage';
import Login from '../LoginPage/Login';
// import Reciepe from '../RecipePage/Recipe';

import Pages from '../../Routes/Pages.js';

const Main = () => {
    return ( 
        <>
  
        <Route exact={true} path='/' component={Login}  />
        <Switch >
        <Pages />
        </Switch>
      
        </>
     );
}
 
export default Main;