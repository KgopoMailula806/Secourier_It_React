import React from 'react'
//styling
import '../layout/styles/CookiePromtStyling.css'

//scripts
const CookiePrompt = () => {
    // scripts 
    const scripts = '../layout/scripts/jquery.Cookie.js'
    return (
        <div className='cookie-banner' style='display: none'>            
            <p>
                By using our website, you agree to our 
                <a href='insert-link'>cookie policy</a>
            </p>
            <button class='close'>&times;</button>
        {/** Scripts */}
        <script src={scripts}></script>
        </div>
    );
}

export default CookiePrompt;
