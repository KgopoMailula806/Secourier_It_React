import React, { useState, useContext } from 'react';
import userDetailsContext from './userDetails';
//class PageTracking extends React.Component {    



const PageTracking = () => {
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
                    <li><a href="#">SignUp</a></li>
                </ul>
                {/**<!-- ################################################################################################ --> */}
                </div>
            </div>
        </div>
    );
}    

const initial_state = {
}

const RegistrationComponent = () => {
    const axios = require('axios');
    const url = `/api`;        
    
    // get the context that will be globally accessible to the website
    const userDetails = useContext(userDetailsContext);
    // set the initial user details that will be returned by the api
    const [userDetails_state, setUserDetails_state] = useState({id: 1, 
                                                                name: '', 
                                                                surname: '', 
                                                                email: '',
                                                                password: "",
                                                                confirmPassword: "",
                                                                pysicalAddress: "",
                                                                SignUpDate: ""});
    
    
    // value entered state    
    const [registration_values, setRegistration_values] = useState({id: 1, 
        name: '', 
        surname: '', 
        email: '',
        password: "",
        confirmPassword: "",
        pysicalAddress: "",
        SignUpDate: ""});

    const handleChange = (e) => {
        const {id , value} = e.target   
        setRegistration_values(prevState => ({
            ...prevState,
            [id] : value
        }))
    };

    const [IsloggedIn, setIsloggedIn] = useState(false);    
    
    const donothing = (e) => {
        e.preventDefault();
        console.log("Hello world");
    }

    const registerNewAccount = (e) => {
        //password validation
        e.preventDefault();
        // console.log(login_values);
        const data_str  = JSON.stringify(registration_values)
        // console.log(JSON.stringify(registration_values));

        // let headers = new Headers();              
        // axios.post('http://localhost:3000/api/Login', {
        //     email: login_values.email,
        //     password: login_values.password,
        // })
        // .then(function (response) {
        //     // user logged in 
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

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
                                                {/* Name*/}
                                                <label for="email">Name <span>*</span></label>                                                
                                                <input type="text" 
                                                        className="form-control" 
                                                        id="name" 
                                                        aria-describedby="emailHelp" 
                                                        placeholder="Enter Name" 
                                                        value={initial_state.email}
                                                        onChange={handleChange}
                                                    />&nbsp;
                                                {/* Surname  */}
                                                <label for="email">Surname <span>*</span></label>                                                
                                                <input type="text" 
                                                        className="form-control" 
                                                        id="surname"
                                                        aria-describedby="emailHelp" 
                                                        placeholder="Enter Surname" 
                                                        value={initial_state.email}
                                                        onChange={handleChange}
                                                    />&nbsp;
                                                {/* Email */}
                                                <label for="email">Email <span>*</span></label>                                                
                                                <input type="email" 
                                                        className="form-control" 
                                                        id="email" 
                                                        aria-describedby="emailHelp" 
                                                        placeholder="Enter email" 
                                                        // value={initial_state.email}
                                                        onChange={handleChange}
                                                    />&nbsp;
                                                {/* Pass word */}
                                                <label >password <span>*</span></label>
                                                <input type="password" 
                                                        className="form-control" 
                                                        id="password" 
                                                        placeholder="Password"
                                                        value={initial_state.password}
                                                        onChange={handleChange} 
                                                    />&nbsp;     
                                                {/* confirm Password */}
                                                <label >confirm password <span>*</span></label>
                                                <input type="password" 
                                                        className="form-control" 
                                                        id="confirmPassword" 
                                                        placeholder="Password"
                                                        // value={initial_state.password}
                                                        onChange={handleChange} 
                                                    />&nbsp;                                                  
                                                <div className='one_third'>
                                                    &nbsp;                                                                                            
                                                    <button 
                                                    type="submit"
                                                    className="a-button-input"
                                                    // check if passwords match
                                                    onClick={(registration_values.password != registration_values.confirmPassword)? donothing : registerNewAccount }
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

export default RegistrationComponent
