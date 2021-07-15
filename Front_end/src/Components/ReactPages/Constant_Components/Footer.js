//react
import React,{useState} from "react";
//Styling
import '../../layout/styles/App.css'
import '../../layout/styles/layout.css'

function Footer(){

    var today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const state =  {        
        date: date,
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate()
    };

    return ( 
    <div class="wrapper row5">
            <footer id="footer" className="clear"> 
            { /*<!-- ################################################################################################ --> */}
                <div className="one_quarter first">
                <h6 className="title">Viral</h6>
                <address className="btmspace-15">
                    <div>                  
                    </div>                    
                </address>
                <ul className="nospace">
                    <li className="btmspace-10"><span className="fa fa-phone"></span> +00 (123) 456 7890</li>
                    <li><span className="fa fa-envelope-o"></span> info@domain.com</li>
                </ul>
                </div>
                <div className="one_quarter">
                <h6 className="title">Quick Links</h6>
                <ul className="nospace linklist">
                    <li><a href="#">Home Page</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                </div>
                <div className="one_quarter">
                <h6 className="title">From The Blog</h6>
                <article>
                    <h2 className="nospace"><a href="#">Praesent Vestibulum</a></h2>
                    {/* date., 6<sup>th</sup> April 2045 */}
                    <time className="smallfont" datetime={state.date}> {date}</time>
                    <p>Todo</p>
                </article>
                </div>
                <div className="one_quarter">
                <h6 className="title">Grab Our Newsletter</h6>
                <form method="post" action="#">
                    <fieldset>
                        <legend>Newsletter:</legend>
                        <input className="btmspace-15" type="text" value="" placeholder="Name"></input>
                        <button type="submit" value="submit" onClick={console.log("Hello World")}>Submit</button>                        
                    </fieldset>
                </form>
                </div>
                { /*<!-- ################################################################################################ --> */}
            </footer>
        </div> );
  }

  export default Footer;