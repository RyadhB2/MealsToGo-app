import React, { useContext, useState, useEffect } from "react";

import MapView, { Marker, Callout } from "react-native-maps";
import { Container } from "../../../components/utils/safe-area.component";
import styled from "styled-components";

import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/Restaurents/mock/restaurants.context";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
    width : 100%
    height:100%
    
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { lat, lng, viewport } = location;
  //console.log(viewport);

  const [deltaLat, setDeltaLat] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setDeltaLat(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />

      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: deltaLat,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
