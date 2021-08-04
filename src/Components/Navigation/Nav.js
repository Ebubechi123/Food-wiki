import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars,faWindowClose,faUser,faUserCircle } from "@fortawesome/free-solid-svg-icons";

import  "./Nav.css";

import User from '../../Assets/Images/user-1.png';
library.add(faBars,faWindowClose,faUser,faUserCircle)

const Nav = () => {

const [toggle,setToggle] = useState(false);


  const Toggle =(e) =>{
    setToggle(!toggle);
  };

  
    return ( 

        <>
         <div className="nav-wrapper">
            <nav>
              <div className="user-profile">
              {/* <img src={User} alt="user-profile" className="user-img" /> */}
              <FontAwesomeIcon style={{width:"30px",height:"30px",color:"rgb(5, 153, 10"}} icon="user-circle" />
              </div>
              <div className={  toggle ? 'links-wrapper-on' : "links-wrapper" }>
              <ul className="links">
                <div className="close">
                  <FontAwesomeIcon onClick={(e)=>Toggle(e)} icon="window-close" />
                </div>
                <li>Home</li>
                <li>Favourites</li>
                <li>Settings</li>
              </ul>
              </div>
              <div className="menu" onClick={(e)=>Toggle(e)}>
                <FontAwesomeIcon icon="bars"/>
              </div>
            </nav>
          </div>
        </>

     );
}
 
export default Nav;