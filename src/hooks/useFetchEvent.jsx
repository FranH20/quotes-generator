import axios from "axios";

const useFetchEvent = (url, callback = () => {}) => {
  let data = null,
    error = null,
    loading = false;
  const fetchData = async () => {
    try {
      loading = true;
      await axios(url).then((response) => {
        data = callback(response);
        console.log(data)
      });
    } catch (e) {
      error = e;
    } finally {
      loading = false;
    }
  };
  fetchData();

  return { data, error, loading };
};

export default useFetchEvent;
