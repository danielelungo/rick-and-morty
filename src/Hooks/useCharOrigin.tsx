import { useState, useEffect } from "react";
import axios from "axios";
import { CharacterOrigin } from "../Interfaces/types";

const useCharOrigin = (url: string) => {
  const [errorOrigin, setErrorOrigin] = useState("");
  const [loadingOrigin, setLoadingOrigin] = useState(true);
  const [originData, setOriginData] = useState<CharacterOrigin>();

  const fetchData = (url: string) => {
    axios
      .get(url)
      .then((res) => {
        setOriginData(res.data);
      })
      .catch((err) => {
        setErrorOrigin("There is no origin url");
        console.log("error: ", err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoadingOrigin(false);
        }, 100);
      });
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  // custom hook returns value
  return { originData, errorOrigin, loadingOrigin };
};

export default useCharOrigin;
