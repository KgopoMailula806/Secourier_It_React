import React, {useContext} from 'react';

const user = {
    name: "Kgopo",
    surname: "Whackman",
    gender: "Some Identified Gender"
}


export const userContext = React.createContext(user);
