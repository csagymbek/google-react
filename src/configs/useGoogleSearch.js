import { useState, useEffect } from "react";
import { API_KEY } from "./keys";

export const CONTEXT_KEY = "95d0c3cea4d73e7d0";

export default function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [term]);
  return { data };
}
