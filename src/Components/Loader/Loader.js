import React from 'react';
import loader from "../../Assets/Images/Eclipse-1s-200px.gif";
import "../Loader/Loader.css"
const Loader = () => {
    return ( 
        <>
    <div className="loader">
    <img src={loader} alt="" />
    </div>
        </>

     );
}
 
export default Loader;