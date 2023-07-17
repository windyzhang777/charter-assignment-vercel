import { useCallback, useState } from "react";
import { useTransactionContext } from "./useTransactionContext";
import transactionJSON from "../data/transaction.json";

export const useGetTransaction = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useTransactionContext();

  const getTransaction = useCallback(() => {
    setIsLoading(true);
    setError(null);

    fetch("http://localhost:8000/transaction", {
      method: "GET",
      header: { "Context-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        dispatch({ type: "GET_ALL_TX", payload: data });
      })
      .catch((error) => {
        setIsLoading(false);
        setError("fetch transaction failed");
        dispatch({
          type: "GET_ALL_TX",
          payload: transactionJSON.transaction,
        });
      });
  }, [dispatch]);

  return {
    isLoading,
    error,
    getTransaction,
  };
};
