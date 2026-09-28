import { useState, useEffect } from "react";

export function useQuery({ promise }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    promise()
      .then(setData)
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [promise]);

  return { data, isLoading, error };
}
