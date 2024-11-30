import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loader,setLoader] = useState(true)

    const createUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUser = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        user,
        loader,
        createUser,
        signinUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;