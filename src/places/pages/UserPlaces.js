import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire",
    description: "mah",
    imageUrl:
      "https://www.citybreak.com/sites/cb_citybreak/files/styles/slide_large/public/ben-o-bro-wpU4veNGnHg-unsplash.jpg?h=41f55a5b&itok=xr1okfZF",
    address: "New York Sjedinjene Američke Države",
    location: {
      lat: 40.5645845,
      lng: -74.216858,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Empire",
    description: "mah",
    imageUrl:
      "https://www.citybreak.com/sites/cb_citybreak/files/styles/slide_large/public/ben-o-bro-wpU4veNGnHg-unsplash.jpg?h=41f55a5b&itok=xr1okfZF",
    address: "New York Sjedinjene Američke Države",
    location: {
      lat: 40.5645845,
      lng: -74.216858,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadPlaces} />;
};

export default UserPlaces;
