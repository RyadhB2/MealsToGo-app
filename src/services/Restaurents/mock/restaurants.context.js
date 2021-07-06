import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from "react";
import { LocationContext } from "../../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurents([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurents(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString);
      retriveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{ restaurants: restaurants, isLoading: isLoading, error: error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
