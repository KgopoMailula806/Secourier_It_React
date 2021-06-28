//react
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

import {useCookies} from 'react-cookie'
//Styling
import './Components/layout/styles/App.css';
import './Components/layout/styles/layout.css'

//Page Components
import {
      Wrapper_row_3,
      SignUPTag
    } from './Components/Index'

import Welcome from "./Components/ReactPages/WelcomeSection";

import  Top_footer from './Components/ReactPages/Constant_Components/Top_footer';
import  Nav_bar from './Components/ReactPages/Constant_Components/Nav_bar';
import  Footer from './Components/ReactPages/Constant_Components/Footer';
import  Template_Reference_Links from './Components/ReactPages/Constant_Components/Template_Reference_Links'; 
import  Scripts from './Components/ReactPages/Constant_Components/Scripts';
import LoginPage from './Components/ReactPages/UserAdmin/Login'
import Register from './Components/ReactPages/UserAdmin/Register'

//contexts 
import userDetailsContext from "./Components/ReactPages/UserAdmin/userDetails"; //userdetails context

const App = () => {
  const adminUser = { 
    LoginProperties: {
        email: "xxx@gmail.com",
        password: "1-02-dsakd"
        }, 
    userPriviledge : "customer", 
    isLoggedIn: true
  }

/*
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [user,setUser] = useState({name:"", email:""}) // credentials when not logged in 
  boolean bool = Boolean.parseBoolean(isLoggedIn);

  const [error, setError] = useState("")

  const Login = details => {

    if(details.email == adminUser.email && details.password == adminUser.password){
      setUser({
        name: details.name,
        password: details.password
      });      
    } else {
      console.log ();
      setError("Details do not match");
    }
    const Logout = () => {
    //Query data bas
        setUser(
          { name: "",
            password: ""});
    }    
  }
  ///////////// cookies
  const [cookies, setCookie] = useCookies(['name']);
 
  function onChange(newName) {
    setCookie('name', newName, { path: '/' });
  } */
   
  return (
    <div>
      {/** ternary operator for validating use access: Login*/}                         
                {/**User is logged in*/}
                {/**Make log out pbar appear*/}
                <Router>                     
                  <userDetailsContext.Provider value={adminUser} >
                      {/**specify visibility of nav components*/}
                    <Nav_bar/>
                    <Top_footer/>
                      <Switch>                              
                        <Route path='/' exact >
                          <Welcome/>
                          </Route>                                     
                            {/**
                             <Route path='/about' component={Welcome}/>                                    
                              */}
                          <Route path='/Login' exact>
                            <LoginPage/>
                          </Route>
                          <Route path='/Register' exact>
                            <Register/>
                          </Route>                        
                      </Switch>
                    <Footer/>
                    <Template_Reference_Links/>                
                </userDetailsContext.Provider>
                </Router>
                <Scripts/>                    
    </div>
  );
}

export default App;
