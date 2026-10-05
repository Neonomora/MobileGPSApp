import { useCallback, useState } from "react";

import { getCurrentLocation } from "../services/gps/locationService";

export default function useLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refreshLocation = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await getCurrentLocation();

      setLocation(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    location,
    loading,
    error,
    refreshLocation,
  };
}
