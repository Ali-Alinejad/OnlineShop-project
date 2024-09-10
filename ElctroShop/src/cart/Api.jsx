import { useEffect, useState } from "react";
export default function useApi() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const res = await fetch("http://localhost:8000/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
    
        setCartData(data);
      } catch (error) {
        setError(error);
        <p>{error.message}</p>;
      } finally {
        setLoading(false);
      }
    }

    fetchCartData();
  }, []);

  return { cartData, loading, error }; 
}
