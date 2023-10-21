import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebaseConfig";

export const AuthContext = createContext(null)

// Created an instance of the Google provider object
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create user 
    const createUser = (email, password) =>{
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    } 
    // login user 
    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password);
    }
    
    // login with google 
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // observer 
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return ()=>{
            return unSubscriber()
        }
    },[])

    // log out user 
    const logOut = () => {
        return signOut(auth);
    }

    const authData = {
        user,
        loading,
        createUser,
        logInUser,
        googleLogin,
        logOut

    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;