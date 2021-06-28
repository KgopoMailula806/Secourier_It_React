import React,{useState} from "react";
//Styling
import '../../layout/styles/App.css'
import '../../layout/styles/layout.css'

class Scripts extends React.Component{
    render(){
        
        let anchor_reference = "#top"
        const min = "layout/scripts/jquery.min.js";
        const backDrop = "layout/scripts/jquery.backtotop.js";
        const mobilemenu = "layout/scripts/jquery.mobilemenu.js";
        return(                                            
            <div>
                <a id="backtotop" href={anchor_reference} ><i></i></a>
                    <script src={min}></script>
                    <script src={backDrop}></script>
                    <script src={mobilemenu}></script>
            </div>                  
        );
    }
}

export default Scripts;
