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
//Styling
import '../../layout/styles/App.css'
import '../../layout/styles/layout.css'

function Nav_bar(){
  let history = useHistory();
  
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const login = () => {
    //send qu
  }

  //change component visibility from user status

  //history.push(OrderPage);
  //const order_path = require('./pages/OrderPage');
  return (            
  <div className="wrapper row1">
      <header id="header" className="clear"> 
          <div id="logo" className="fl_left">
              <h1><Link to='/' >Secourier It</Link></h1>
          </div>
          <nav id="mainav" className="fl_right">
          <ul className="clear">
              {/* redirect to a react page*/}                  
                <li className="active">
                    <Link to='/'>Home</Link>
                </li>   
              <li><a className="drop" >account</a>
              <ul>
              {isLoggedIn ? null: <Link onClick={login} to='/Login'>Login</Link>}
              {isLoggedIn ? null: <Link to='/Register'>SignUp</Link>}
              {isLoggedIn ? <Link to='/Register'>myAccount</Link>: null}
              </ul>
              </li>
              <li><a className="drop" href="#">Dropdown</a>
              <ul>
                  <Link>
                    <li><a href="#">Level 2</a></li>
                  </Link>                                  
                  <li><a className="drop" href="#">Level 2 + Drop</a>
                  <ul>
                      <li><a href="#">Level 3</a></li>
                      <li><a href="#">Level 3</a></li>
                  </ul>
                  </li>
              </ul>
              </li>
              <li><a href="#">Link Text</a></li>              
          </ul>
          </nav>      
      </header>
  </div>
  );
}
export default Nav_bar;
