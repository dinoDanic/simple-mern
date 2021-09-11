import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttpClient from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const [places, setPlaces] = useState([]);
  const { sendRequest, error, clearError, isLoading } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fatchPlaces = async () => {
      try {
        const loadedPlaces = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        );
        setPlaces(loadedPlaces.place);
      } catch (err) {
        console.log(err.message);
      }
    };
    fatchPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && places && (
        <PlaceList items={places} onDeletePlace={placeDeletedHandler} />
      )}
    </>
  );
};

export default UserPlaces;
