
import React from "react";
import '../layout/styles/layout.css'

import CookiePrompt from './CookiePrompt'

function UserTypeSection(props){
    return (
        <li className={props.classType}>
            <article className="overlay"><a href="#"><i className={props.roleIcon}></i></a>
                <h6 className="heading">{props.userType}</h6>
                <p>{props.roleText}</p>
                <footer><a href="#">Read More &raquo;</a></footer>
            </article>
        </li>
    );
}

function Welcome(){
    return(
        <div className="wrapper row2 bgded" style={{backgroundImage:'url(./images/demo/backgrounds/01.png)'}}>
            <div class="overlay">
                <section id="pageintro" className="clear"> 
                { /*<!-- #####################################################################################&hellip;########### --> */}
                <div className="center btmspace-80">
                <h6 className="heading uppercase btmspace-30">Hello, welcome to</h6>
                    <h2 className="heading xxl uppercase btmspace-30">Secourier It</h2>
                    <p className="xl nospace capitalise">Know about every service, but not evey service knows about you.</p>
                </div>
                
                <ul className="nospace group services">
                    <UserTypeSection classType="one_third first" userType='Business' roleIcon='fa fa-legal'
                        roleText='set up a business account for sercure courier services of customer goods to you business'/>
                    <UserTypeSection classType="one_third" userType='Customer' roleIcon='fa fa-line-chart'
                        roleText='Set a customer accout to have you product couriered to any relevant business'/>
                    <UserTypeSection classType="one_third" userType='Vancancy Oppotunities' roleIcon='fa fa-line-archive'
                        roleText='Become part of our family by checking some of our avaliable vacancy opotunities'/>
                    {/**
                    <li className="one_third">
                    <article className="overlay"><a href="#"><i className="fa fa-line-chart"></i></a>
                        <h6 className="heading">Eget molestie augue diam</h6>
                        <p>Donec facilisis volutpat ligula nec egestas aliquam malesuada, lectus sed sollicitudin&hellip;</p>
                        <footer><a href="#">Read More &raquo;</a></footer>
                    </article>
                    </li>
                    <li className="one_third">
                    <article className="overlay"><a href="#"><i className="fa fa-archive"></i></a>
                        <h6 className="heading">Fusce quis feugiat urna</h6>
                        <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet&hellip;</p>
                        <footer><a href="#">Read More &raquo;</a></footer>
                    </article>
                    </li>
                    <CookiePrompt/>
                     */}
                </ul>
                { /*<!-- ################################################################################################ --> */}
                </section>
                
            </div>
    </div>
    );
}

export default Welcome;