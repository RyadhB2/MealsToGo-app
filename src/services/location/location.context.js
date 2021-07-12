import React, { useState, createContext, useEffect } from "react";

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
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    //console.log(searchKeyword);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        //console.log("****************************************location has changed to ",result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        //console.log(error)
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
