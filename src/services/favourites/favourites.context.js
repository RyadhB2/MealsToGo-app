import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValueFavourites = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValueFavourites);
    } catch (e) {
      // saving error
      console.log("saving error : ", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) setFavourites(JSON.parse(value));
    } catch (e) {
      // error reading value
      console.log("loading error :", e);
    }
  };
  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
