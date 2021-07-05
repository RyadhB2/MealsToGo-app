import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
   
    setKeyword(searchKeyword);
    setIsLoading(true);
    if(!searchKeyword.length) return;
    console.log(searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        //console.log(location);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
        //console.log(error)
      });
  };


  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch , keyword}}
    >
      {children}
    </LocationContext.Provider>
  );
};
