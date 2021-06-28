import React, { useState, useEffect, useContext } from 'react'
import userDetailsContext from './userDetails';
import qs from 'qs';
//import Form from "react-boo";
//import axios from 'axios';

var state = {}

//PageTracking 
const PageTracking = () => {
    
    const initialDetails = {email: "", password:""};
    //const [state, dispatch] = useReducer(reducer, initialDetails, init);
    const [links, setLinks] = useState(null);
    return (
        <div class="wrapper row2 bgded" style={{backgroundImage:'url(../../images/demo/backgrounds/01.png)'}}>
            <div class="overlay">
                <div id="breadcrumb" class="clear"> 
                {/**<!-- ################################################################################################ --> */}
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Ipsum</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                {/**<!-- ################################################################################################ --> */}
                </div>
            </div>
        </div>
    );
}

// Login Component
const Login = () => {
    const axios = require('axios');
    const url = `/api`;        
    
    // get the context that will be globally accessible to the website
    const userDetails = useContext(userDetailsContext);
    // set the initial user details that will be returned by the api
    const [userDetails_state, setUserDetails_state] = useState({id: 1, 
                                                                name: '', 
                                                                email: '',
                                                                password: ""});
    
    
    // value entered state    
    const [login_values, setlogin_values] = useState({
    email : "",
    password : ""     
    });    

    const handleChange = (e) => {
        const {id , value} = e.target   
        setlogin_values(prevState => ({
            ...prevState,
            [id] : value
        }))
    };

    const [IsloggedIn, setIsloggedIn] = useState(false);    

    const verifyUserCredentials = (e) => {
        //password validation
        e.preventDefault();
        // console.log(login_values);
        console.log(JSON.stringify(login_values));
        let headers = new Headers();
      
        
        axios.post('http://localhost:3000/api/Login', {
            email: login_values.email,
            password: login_values.password,
        })
        .then(function (response) {
            // user logged in 
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }     
 
    return(
        <>
            <PageTracking/>            
                <div class="wrapper row3">
                        <main class="container clear">
                            <div class="content">
                                <div id="comments">                                  
                                    { /**(error != "") ? <h2>There was an Issue:{error}</h2>: <h2>Please enter your details</h2>*/}                                    
                                        <form>
                                            <div className="w3-container one_third">
                                                <label for="email">Email <span>*</span></label>
                                                <input type="email" 
                                                        className="form-control" 
                                                        id="email" 
                                                        aria-describedby="emailHelp" 
                                                        placeholder="Enter email" 
                                                        value={state.email}
                                                        onChange={handleChange}
                                                    />&nbsp;
                                                <label >password <span>*</span></label>
                                                <input type="password" 
                                                        className="form-control" 
                                                        id="password" 
                                                        placeholder="Password"
                                                        value={login_values.password}
                                                        onChange={handleChange} 
                                                    />&nbsp;                                                  
                                                <div className='one_third'>
                                                    &nbsp;                                                                                            
                                                    <button 
                                                            type="submit"
                                                            className="a-button-input"
                                                            onClick={verifyUserCredentials}
                                                            >Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                </div>                   
                            </div>
                            {/** 
                             <!-- ################################################################################################ -->
                            */ }
                            <div class="clear"></div>
                        </main>
                </div>            
        </>
    );

}

export default Login;
