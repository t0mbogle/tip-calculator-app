import React, { createContext } from "react"

export type BillContextType = {
  amount: string
  tip: string
  people: string
  setAmount: React.Dispatch<React.SetStateAction<string>>
  setTip: React.Dispatch<React.SetStateAction<string>>
  setPeople: React.Dispatch<React.SetStateAction<string>>
};

const BillContext = createContext<BillContextType>({
  amount: '',
  tip: '',
  people: '',
  setAmount: () => {},
  setTip: () => {},
  setPeople: () => {}
})

export default BillContext