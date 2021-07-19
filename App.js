import React from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme/index";

import { RestaurantsContextProvider } from "./src/services/Restaurents/mock/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
/*
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAhn-GP2fCFoesLV8lWrnr83HbVTn6B60",
  authDomain: "mealstogo-c6170.firebaseapp.com",
  projectId: "mealstogo-c6170",
  storageBucket: "mealstogo-c6170.appspot.com",
  messagingSenderId: "180936351535",
  appId: "1:180936351535:web:cfaa32375f35e24856cbda",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}*/

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
