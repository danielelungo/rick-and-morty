import { useState, useEffect } from "react";
import axios from "axios";
import { CharacterLocation } from "../../Interfaces/types";

const useCharLocation = (url: string) => {
  const [errorLocation, setErrorLocation] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [locationData, setLocationData] = useState<CharacterLocation>();

  const fetchData = (url: string) => {
    axios
      .get(url)
      .then((res) => {
        setLocationData(res.data);
      })
      .catch((err) => {
        setErrorLocation("Can't fetch data");
        console.log("error: ", err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoadingLocation(false);
        }, 100);
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
