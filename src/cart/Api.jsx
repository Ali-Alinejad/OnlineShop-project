import { useEffect, useState } from "react";
import axios from "axios"; 

export default function useApi() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setCartData(response.data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    }

    fetchCartData();
  }, []);

  return { cartData, loading, error };
}
