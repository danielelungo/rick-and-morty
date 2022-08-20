import { useState, useEffect } from "react";
import axios from "axios";

const useCharLocation = (url: string) => {
  const [errorLocation, setErrorLocation] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [locationData, setLocationData] = useState<any>();

  const fetchData = (url: string) => {
    axios
      .get<any>(url)
      .then((res) => {
        setLocationData(res.data);
      })
      .catch((err) => {
        setErrorLocation("No location url provided");
        console.log("error: ", err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoadingLocation(false);
        }, 1500);
      });
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  // custom hook returns value
  return { locationData, errorLocation, loadingLocation };
};

export default useCharLocation;
