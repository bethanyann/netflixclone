import React, { useState, createContext } from 'react';


//context can be any data that you want to be accessible from anywhere in the application
export const MyContext = createContext();

//create a provider and wrap it around the <App> component to give the whole app access to it
const UserProvider = ({children}) => {

    const [ state, setState ] = useState(undefined);

    return (
        //pass in the exact same structured array for state and setState
        <MyContext.Provider value={[state, setState]} >{children}</MyContext.Provider>
    )
}

export default UserProvider;