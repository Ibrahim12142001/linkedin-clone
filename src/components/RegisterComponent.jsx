import React, { useState} from "react"; 
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import '../Sass/LoginComponent.scss';
import logo from '../assets/logo.png';
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


export default function RegisterComponent(){
    let navigate = useNavigate();    
    const [credentails, setCredentials] = useState({});

    const login = async () => {
        try{
          let res = await RegisterAPI(credentails.email, credentails.password);
          toast.success('Account Created!')
          navigate('/home')
        } catch(err){
            console.log(err);
            toast.error('Something Went Wrong')
        }

    };

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
        toast.success('Registered to LinkedIn!')
        navigate('/home')
    }
    return ( 
        <div className="login-wrapper">
            <img src={logo} className="logo"/>

            <div className="login-wrapper-inner">
                <h1 className="heading"> Sign Up </h1>
                <p className="sub-heading"> Make the most of your professional life </p>
                
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
                        placeholder="Password (6 Characters or more)"
                        />
                    </div>
                <button  onClick={login} className="login-btn"> 
                Join
                </button> 

                
                </div>

                <hr  class="hr-text" data-content="Or" />

                <div className="google-btn">
                <GoogleButton
                    className="google"
                    onClick={googleSignIn}/> 


                <p className="go-to-signup">
                    Already on LinkedIn? {" "} 
                    <span className="join-now" onClick={() => navigate("/")}>
                        Sign In
                    </span>
                </p>
                </div>
            </div>
    );
    }