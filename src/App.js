import React from 'react';
import { Switch } from 'react-router-dom';
import Login from "../src/Pages/LoginPage/Login";
import Main from './Pages/Main/Main';
// const APP_ID = 'dedf557e';
// const APP_KEY ="3d256c29668d9c3f0eb3628f14e7f77e";
const App = () => {
  return ( 
    <>
    <Switch>
  <Main />
  </Switch>
    </>
   );
}
 
export default App;