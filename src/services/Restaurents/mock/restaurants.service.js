import { mocks,mockImages } from "./index";
import camelize from "camelize";
import { RestaurentInfoCard } from "../../../features/restaurents/components/restaurent-info-card.component";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found :/");
    resolve(mock);
  });
};

export const restaurantsTransform = ({results}= []) => {
  const mappedResults = results.map((restaurant) =>{
    restaurant.photos = restaurant.photos.map((p)=>{
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    })
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: !restaurant.business_status === "CLOSED_TEMPORARILY",
      address : restaurant.vicinity,
    }
  });
  //console.log(mappedResults[1])
  //const newResult = camelize(results.length);
  return camelize(mappedResults);
};
