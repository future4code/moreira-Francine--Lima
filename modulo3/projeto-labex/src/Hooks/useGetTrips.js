import { useState, useEffect } from "react";
import axios from "axios";

export const useGetTrips = (url) => {
  const [tripsList, setTripsList] = useState([]);
  // //Axios get trips
  const getTrips = () => {
    axios
      .get(url)
      .then((res) => {
        console.log("DadosTrips", res.data);

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
