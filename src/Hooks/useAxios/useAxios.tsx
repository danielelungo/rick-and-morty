import { useState, useEffect } from "react";
import axios from "axios";
import { Character } from "../../Interfaces/types";

const useAxios = (id: number) => {
  const [response, setResponse] = useState<Character>();
  const [error, setError] = useState("");
  const [loading, setloading] = useState<boolean>(true);
  const [location, setLocation] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");

  const fetchData = (id: number) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setResponse(res.data);
        setLocation(res.data.location.url);
        setOrigin(res.data.origin.url);
      })
      .catch((err) => {
        setError("Can't fetch data");
        console.log("error: ", err);
      })
      .finally(() => {
        setTimeout(() => {
          setloading(false);
        }, 100);
      });
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    } else {
      setError("There is no id");
    }
  }, [id]);

  // custom hook returns value
  return { response, error, loading, location, origin };
};

export default useAxios;
