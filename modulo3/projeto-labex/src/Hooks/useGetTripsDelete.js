import { useState, useEffect } from "react";
import axios from "axios";

export const useGetTripsDelete = (url) => {
  const [tripsList, setTripsList] = useState([]);
//   const [isDeleted, setIsDeleted] = useState(false);
  // //Axios get trips

  const getTrips = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log("DadosTrips", res.data);

        setTripsList(res.data.trips);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTrips();
  }, []);

  return tripsList;
};
