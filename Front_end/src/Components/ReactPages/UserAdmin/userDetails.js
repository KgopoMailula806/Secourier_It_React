//react imports

import React, {useState} from 'react'

const adminUser = { 
    LoginProperties: {
        email: "xxx@gmail.com",
        password: "1-02-dsakd"
        }, 
    userPriviledge : "customer", 
    isLoggedIn: true}

const userDetailsContext = React.createContext(adminUser);

export default userDetailsContext;
