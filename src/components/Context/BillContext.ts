import React, { createContext } from "react";

export type BillContextType = {
  amount: string | null
  tip: string | null
  people: number | null
  setAmount: React.Dispatch<React.SetStateAction<string | null>>;
  setTip: React.Dispatch<React.SetStateAction<string | null>>;
  setPeople: React.Dispatch<React.SetStateAction<number | null>>;
};

const BillContext = createContext<BillContextType>({
  amount: null,
  tip: null,
  people: null,
  setAmount: () => {},
  setTip: () => {},
  setPeople: () => {},
});

export default BillContext;