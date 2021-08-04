import React from 'react';
import { Link } from 'react-router-dom';
import '../LoginPage/Login.css'
import LoginImage from '../../Assets/Images/Food Three.jpg';
import logo from '../../Assets/Images/logo_size.jpg'
import Button from '../../Components/Button/Button';

const Login = () => {
    return ( 
        <>
    <div className="login-wrapper">
        <div className="login-container">
            <div className="col-1 img-display">
                <div className="image-display">
                    <img src={LoginImage} alt="login-imgae" />
                </div>
            </div>

            <div className="col-1">
                <div className="login-header">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                </div>

                <div className="login-form">
                        <div className="login-title">
                            <h2>Login</h2>
                        </div>
                        <form >
                            <label >Name</label>
                            <input  type="text" name="name" id="" placeholder="Name" />
                            <label >E-mail</label>
                            <input type="email" name="email" id=""  placeholder="E-mail"/>
                            <label >Password</label>
                            <input type="password" name="" id=""  placeholder="Password" />
                           <Link to="./home">
                                <Button>Login
                                </Button>
                            </Link>

                        </form>
                    </div>
            </div>

        </div>
    </div>
        </>

     );
}
 
export default Login;


// OnClick={(e)=>{ e.preventDefault()}}