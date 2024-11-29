import React, { createContext } from "react"

export type BillContextType = {
  amount: string
  tip: string | null
  people: string
  setAmount: React.Dispatch<React.SetStateAction<string>>
  setTip: React.Dispatch<React.SetStateAction<string | null>>
  setPeople: React.Dispatch<React.SetStateAction<string>>
};

const BillContext = createContext<BillContextType>({
  amount: '',
  tip: null,
  people: '',
  setAmount: () => {},
  setTip: () => {},
  setPeople: () => {}
})

export default BillContext