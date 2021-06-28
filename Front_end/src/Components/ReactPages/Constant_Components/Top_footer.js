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

function Top_footer (){
  const history = useHistory();
  const [links, setLinks] = useState(null);
  return (
      <div className="wrapper row0">
      <div id="topbar" className="clear"> 

          <div className="fl_left">
          <ul className="nospace inline">
              <li><i className="fa fa-phone"></i> +00 (123) 456 7890</li>
              <li><i className="fa fa-envelope-o"></i> info@domain.com</li>
          </ul>
          </div>
          <div className="fl_right">
          <ul class="faico clear">                                                   
              {/**li><a className="faicon-facebook" onClick={history.push('/Index')}><i className="fa fa-facebook"></i></a></li> */}
              <li><a className="faicon-pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
              <li><a className="faicon-twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="faicon-dribble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="faicon-linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="faicon-google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
              <li><a className="faicon-rss" href="#"><i className="fa fa-rss"></i></a></li>              
          </ul>          
          </div>
      </div>
      </div>
  );
}
export default Top_footer;
