import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import {useHistory} from "react-router-dom"
import React, {useState} from "react";
import '../layout/styles/layout.css'
import AnotherPage from "./anotherPage";

function HelloWorld() {
    let history = useHistory();
    //when redirecting
    history.push()
    // Test data
    const [data_1, setData_1] = React.useState([
        {name: "ED"},
        {name: "Jhon"},
        {name: "Terry"}
    ]);
    
    //api data
    const [data, setData] = React.useState(null);
/*
    React.useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []); */
    
    //states    
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);    

    //lamda expression testing 
    console.log([1,2,3,4].filter((value) => value % 2 === 0));

    const  increment = () => {
        setCount(count+1)
        setRed(!isRed)
    }

    return(
        <div>
            {/* You can make the claname equal to a ternary value thus its value 
                can depend on the evaluation of a logical assertion */}
            <h1 className={isRed ? 'red':""}>{count}</h1>
            {/* onclick activate the increment fumction for the count function*/}
            <button onClick={increment}>increment</button>
            <h1>{count} : {data_1.map(name => (
                <h1>{name.name}</h1>
            ))}</h1>
        </div>
    );
}

export default HelloWorld;
