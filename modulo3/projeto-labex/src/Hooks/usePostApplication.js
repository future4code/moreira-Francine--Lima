import { useState, useEffect } from "react";
import axios from "axios";

export const usePostApplication = (url, body, headers) => {
  const applyToTrip = () => {
    const [idTrip, setIdTrip] = useState("");
    axios
      .post(`${url}:${idTrip}/apply`, body, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return applyToTrip;
  };
};
