import { createContext, useReducer } from "react";
import {
  calcPointsPerTx,
  getDataByPoints,
  sortUsers,
} from "../helpers/commonHelpers";

export const TransactionContext = createContext();

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_TX":
      const updated = action?.payload?.map((d) => ({
        ...d,
        points: calcPointsPerTx(d.amount),
      }));
      return { ...state, transaction: updated };
    case "GET_TX_POINTS":
      const allUserIds = sortUsers(state.transaction);
      const res = [];
      for (const id of allUserIds) {
        res.push(getDataByPoints(id, state.transaction));
      }
      return { ...state, dataPoints: res };
    default:
      return state;
  }
};

export const TransactionContextProvider = ({
  children,
}) => {
  const [state, dispatch] = useReducer(transactionReducer, {
    transaction: null,
    dataPoints: null,
  });
  return (
    <TransactionContext.Provider
      value={{ ...state, dispatch }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
