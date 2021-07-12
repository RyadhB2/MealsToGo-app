import React from "react";

import { Image,View,Text } from "react-native";
import { RestaurentInfoCard } from "../../restaurents/components/restaurent-info-card.component";
import { CompactRestaurantInfo } from "../../restaurents/components/compact-restaurant-card.component";
export const MapCallout = ({restaurant})=>{

    return (<CompactRestaurantInfo restaurant={restaurant}/>)
}