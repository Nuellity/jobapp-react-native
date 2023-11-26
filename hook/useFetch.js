import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const useFetch = (endpoints, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoints}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("An error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetchData = async () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    refetchData,
    error,
  };
};

export default useFetch;
