import { useState, useEffect } from "react";
import axios from "axios";

const useAllChars = (page: number) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [numPages, setNumPages] = useState(0);

  const fetchData = (page: number) => {
    axios
      .get<any>(`https://rickandmortyapi.com/api/character/?page=${page}`)

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
        }, 1500);
      });
  };

  useEffect(() => {
    if (page) {
      fetchData(page);
    }
  }, [page]);

  // custom hook returns value
  return { data, error, loading, numPages };
};

export default useAllChars;
