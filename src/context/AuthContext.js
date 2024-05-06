import React, { createContext, useEffect, useState } from 'react'
import { 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState({});

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
    }

    useEffect(()=> {
        const checkUser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            checkUser();
        }
    }, [])

  return (
    <AuthContext.Provider value={{
        googleSignIn, logOut, user
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext
