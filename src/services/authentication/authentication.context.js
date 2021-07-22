import React, { useState, createContext } from "react";

import firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState(null);

  //check if there is a seession opend before !
  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      //console.log("HERE ----------- : ",usr.email)
      //setIsLoading(false);
    } else {
      //setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
        //console.log(usr);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        //console.log(" NOT Conntected , error : ", e);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match ... :/");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
        console.log("Conntected ");
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        //console.log(" NOT Conntected , error : ", e);
      });
  };

  const onLogout = () => {
    setUser(null);
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated: !!user,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
