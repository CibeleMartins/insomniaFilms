// libs, methods and hooks
import { useEffect, useState } from "react";
import { createContext } from "react";

// context
// import AuthContext from "./auth-context";

export const AuthContext = createContext({

});

export const AuthContextCustom = ({children})=> {

 

    return <AuthContext.Provider
    value={{
        
    }}>
             {children}
        </AuthContext.Provider>
};