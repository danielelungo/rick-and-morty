import { useState, useEffect } from "react";
import axios from "axios";
import { Character } from "../../Interfaces/types";
import { apiUrl } from "../../Constants/url";

const useAllChars = (page: number) => {
  const [data, setData] = useState<Character[]>([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [numPages, setNumPages] = useState(0);

  const fetchData = (page: number) => {
    axios
      .get(`${apiUrl}/character/?page=${page}`)
      .then((res) => {
        setNumPages(res.data.info.pages);
        setData(res.data.results);
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
    if (page) {
      fetchData(page);
    }
  }, [page]);

  return { data, error, loading, numPages };
};

export default useAllChars;
