import React from "react";
import './layout/styles/layout.css'


function Wrapper_row_3(){
    return (
        <div className="wrapper row3">
            <main className="container clear"> 
                { /*</main><!-- main body --> */ }
                { /*<!-- ################################################################################################ --> */}
                <div className="group">
                <div class="one_third first"><img src={require ("./images/demo/460x700.png")}/> </div>
                <div className="two_third">
                    <h2 class="heading">Etiam finibus tempus felis eget ullamcorper</h2>
                    <p>Cras pellentesque neque, consectetur adipiscing elit. Fusce venenatis elit ac ligula euismod varius. Maecenas feugiat purus quam, vel aliquet tellus sodales eu. Integer vitae vestibulum turpis, in sollicitudin quam. Aliquam vulputate non felis non luctus. Vestibulum eget augue nulla. Aliquam dignissim nibh mi, ut bibendum quam dapibus eget. Nam nec nisi vel sapien pulvinar ultrices. Curabitur rutrum nisl sagittis, pretium velit eget, convallis lacus. Nulla fermentum nulla ut lacus maximus, ut porttitor neque varius. Nullam sed vulputate sem. Sed bibendum porttitor metus.</p>
                    <p className="btmspace-80">Donec lacinia lacus eros, nec luctus odio bibendum dictum. Vivamus nec egestas libero, non faucibus mauris. In in efficitur felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc porttitor turpis in ex porttitor, nec sagittis diam ultrices.</p>
                    <ul className="nospace group">
                    <li className="one_third first">
                        <h6 className="nospace btmspace-10"><a href="#"><i className="fa fa-location-arrow"></i> Praesent neque</a></h6>
                        <p className="nospace">Mauris consectetur vel tellus quis consectetur&hellip;</p>
                    </li>
                    <li className="one_third">
                        <h6 className="nospace btmspace-10"><a href="#"><i className="fa fa-lock"></i> Integer tinciduntt</a></h6>
                        <p className="nospace">Mauris consectetur vel tellus quis consectetur&hellip;</p>
                    </li>
                    <li className="one_third last">
                        <h6 className="nospace btmspace-10"><a href="#"><i className="fa fa-map-marker"></i> Aliquam mauris</a></h6>
                        <p className="nospace">Mauris consectetur vel tellus quis consectetur&hellip;</p>
                    </li>
                    </ul>
                </div>
                </div>
                { /*<!-- ################################################################################################ --> */}
                { /*<!-- main body --> */ }
                
                <div class="clear"></div>                
            </main>
        </div>
    );
}

const img600_7000 = require("./images/demo/600x700.png");
function SignUPTag(){
    //images 
    return (
        <div className="wrapper row3">
            <section id="info" className="clear"> 
            { /*<!-- ################################################################################################--> */}
                <div className="center btmspace-80">
                <h2 className="heading uppercase btmspace-30">Sign UP</h2>
                <p className="lrspace">Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet pulvinar dapibus, dui leo egestas augue, eget molestie augue diam nec ante. Fusce quis feugiat urna. Curabitur a sapien tincidunt, ullamcorper mauris sit amet, ornare augue. Suspendisse potenti. Sed eget ultricies sem. Proin quis lacus egestas, adipiscing nunc ornare, gravida diam. Donec luctus convallis rhoncus.</p>
                </div>
                <div className="group">
                <div className="one_half first"><img src={img600_7000} alt={img600_7000}/> 
                    <h1>image</h1></div>
                <div className="one_half">
                    <ul className="nospace group services">
                    <li>
                        <article><a href="#"><i className="fa fa-asterisk"></i></a>
                        <h6 className="heading">Ut pharetra nisi eu massa</h6>
                        <p>Nunc nec tincidunt turpis sed feugiat dui vestibulum euismod nunc sed vestibulum interdum&hellip;</p>
                        <footer><a href="#">Read More &raquo;</a></footer>
                        </article>
                    </li>
                    <li>
                        <article><a href="#"><i className="fa fa-bar-chart"></i></a>
                        <h6 className="heading">Pellentesque neque porttitor</h6>
                        <p>Maecenas luctus sed nulla ac faucibus cras pellent esque neque vitae tincidunt tempus&hellip;</p>
                        <footer><a href="#">Read More &raquo;</a></footer>
                        </article>
                    </li>
                    <li>
                        <article><a href="#"><i className="fa fa-paper-plane-o"></i></a>
                        <h6 className="heading">Nulla lobortis ultrices nibh</h6>
                        <p>Quisque sit amet tellus nunc praesent nunc augue, eleifend ac consequat sed egestas eu nunc&hellip;</p>
                        <footer><a href="#">Read More &raquo;</a></footer>
                        </article>
                    </li>
                    </ul>
                </div>
                </div>
                { /*<!-- ################################################################################################ --> */}
                <div className="clear"></div>
            </section>
        </div>
    );
}

export {        
        Wrapper_row_3,
        SignUPTag
    }
