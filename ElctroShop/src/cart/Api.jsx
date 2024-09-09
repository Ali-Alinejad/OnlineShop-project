import { useEffect, useState } from "react";
import { Progress } from "@nextui-org/react";
import Cart from "./Cart";

export default function Api() {
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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCartData();
  }, []);

  if (loading) {
    return (
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w mt-2"
      />
    );
  }

  if (error) {
    return (
      <h1 className="text-xl border-2 divide-dashed text-center mt-2 p-10 flex flex-col mx-auto">
        {error}
        <a href="/" to="/">
          Refresh
        </a>
      </h1>
    );
  }

  return <Cart items={cartData} />;
}
