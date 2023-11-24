import React, { useState} from "react"; 
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import '../Sass/LoginComponent.scss';
import logo from '../assets/logo.png';
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


export default function LoginComponent(){
    let navigate = useNavigate();    
    const [credentails, setCredentials] = useState({});

    const login = async () => {
        try{
          let res = await LoginAPI(credentails.email, credentails.password);
          toast.success('Signed In to LinkedIn!')
          localStorage.setItem("userEmail", res.user.email);
          navigate('/home')
        } catch(err){
            console.log(err);
            toast.error('Please check your Email and Password')
        }
    };

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
        toast.success('Signed In to LinkedIn!')
          navigate('/home')
    }
    return ( 
        <div className="login-wrapper">
            <img src={logo} className="logo"/>

            <div className="login-wrapper-inner">
                <h1 className="heading"> Log In </h1>
                <p className="sub-heading"> Stay updated on your professional world </p>
                
                    <div className="auth-input"> 
                        <input 
                        onChange={(event) =>
                        setCredentials({ ...credentails, email: event.target.value}) 
                        } 
                        type = "email"
                        className="common-inputs" 
                        placeholder="Enter your email"
                        />
                        <input 
                        onChange={(event) =>
                        setCredentials({ ...credentails, password: event.target.value}) 
                        } 
                        type = "password"
                        className="common-inputs" 
                        placeholder="Password"
                        />
                    </div>
                <button  onClick={login} className="login-btn"> 
                Log In
                </button> 

                
                </div>

                <hr  class="hr-text" data-content="Or" />

                <div className="google-btn">
                <GoogleButton
                    className="google"
                    onClick={googleSignIn}/> 


                <p className="go-to-signup">
                    New to LinkedIn? {" "} 
                    <span className="join-now" onClick={() => navigate("/register")}>
                        Join now
                    </span>
                </p>
                </div>
            </div>
    );
    }