import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }
    
    // Observe on state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current value of the user', currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])





    const authInfo = { 
        user, 
        createUser, 
        signinUser ,
        signOutUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}

/**
 * 1. Create Context and export it
 * 2. set provider with value
 * 3. use the auth provider in the main.jsx file
 * 4. access children in the authProvider component as children as use it in the middle of the Provider
 * 5.
 */