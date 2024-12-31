import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosSecure from "../Hook/useAxiosSecure";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState("loading");
  const provider = new GoogleAuthProvider();
  const axiosSecure = useAxiosSecure()

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // setIsLoading(false);
      setUser(currentUser);
      if(currentUser){
        // get token and store token
        const userInfo = {email : currentUser.email}
        axiosSecure.post("/jwt", userInfo )
        .then(res => {
          if(res.data.token){
            localStorage.setItem("access-token", res.data.token)
            setIsLoading(false)
          }
        })
      }
      else{
        // TODO : remove token (if token stored in client side)
        localStorage.removeItem("access-token")
        setIsLoading(false)
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    createUser,
    signIn,
    logOut,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
