import React, { useState, createContext } from "react";

import firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((usr) => {
        setUser(usr); 
        setIsLoading(false);
        setIsAuthenticated(true)
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
    <AuthenticationContext.Provider value={{ user, isLoading, error, onLogin,isAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
