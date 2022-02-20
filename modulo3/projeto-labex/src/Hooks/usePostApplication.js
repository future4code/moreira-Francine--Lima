import axios from "axios";

export const usePostApplication = (url, body, headers) => {
  // const [idTrip, setIdTrip] = useState("");
  const applyToTrip = () => {
    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return applyToTrip();
  };
};
