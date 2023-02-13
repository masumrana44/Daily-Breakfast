import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config.js';
import { toast } from 'react-hot-toast';


export const authContext = createContext();
const AuthProvider = ({ children }) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(false);

const auth = getAuth(app)
// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


// login With Google 
const loginWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

// login With Github 
const loginWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}

// Create User 
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);

}

// adding name
const updateInfo = (name) => {
    return updateProfile(auth.currentUser, {
        displayName: name
    })
        .then(() => {
            console.log('Youser name has updated')
        })
        .catch(error => {
            console.error(error)
        })
}

const emailVerify = () => {
    return sendEmailVerification(auth.currentUser)

}

// login With Email, password
const loginWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

// Log Out 
const logOut = () => {
    return signOut(auth)
        .then(() => {
            setLoading(true)
            console.log("log Out Successful")
        })
        .catch(error => console.log(error))
}
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser)
        }

        setLoading(false);
        console.log("User inside state change", currentUser);
    });
    return () => {
        unSubscribe();
        setLoading(false);
    }
}, []);
const authInfo = {
    loginWithGoogle,
    loginWithGithub,
    createUser,
    loginWithEmail,
    updateInfo,
    emailVerify,
    user,
    logOut,
    setLoading,
}


return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
);
};

export default AuthProvider;