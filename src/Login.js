import React from 'react';
import "./Login.css";
import {Link  } from "react-router-dom";

function Login() {
    return (
        <div className="login">
               <h1>DenyDesigns</h1> 
               <p>WHOLESALE LOGIN</p>
               <form className="form">
                <lable>EMAIL</lable>
                <input type="text" placeholder="Example@gmail.com"/>
                <lable>PASSWORD</lable>
                <input type="password" placeholder="Password"/>
                <p>FORGOT PASSWORD?</p><hr/>

               </form>
                    <button> LET'S GO </button>
                    <p>Not a Wholesale Partner?</p>
                    <div className="btn">
                    <Link to="/">
                        <button>GO TO HOME</button>
                        </Link>
                        <Link to="signup">
                        <button>SIGNUP HERE</button>
                        </Link>
                    </div>   
        </div>
    )
}

export default Login
