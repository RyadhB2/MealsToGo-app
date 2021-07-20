import React, { useState, createContext } from "react";

import firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((usr) => {
        setUser(usr); 
        setIsLoading(false);
        setIsAuthenticated(true)
        console.log("Conntected ");
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        console.log(" NOT Conntected , error : ",e);
      });
  };

  return (
    <AuthenticationContext.Provider value={{ user, isLoading, error, onLogin,isAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
