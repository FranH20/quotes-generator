import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url, callback = () => {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios(url).then((response) => {
          setData(callback(response));
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};


export default useFetch;
