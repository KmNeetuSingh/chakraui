// CPC

import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    let [isLogged , setIsLogged] = useState({
        flag : false , 
        user : ""
    })  

    return (
        <AuthContext.Provider value={{isLogged , setIsLogged}}>
            {children}
        </AuthContext.Provider>
    )
}