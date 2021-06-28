import React, { useState } from 'react'

//class PageTracking extends React.Component {    

function SignUp (){
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


export default SignUp
