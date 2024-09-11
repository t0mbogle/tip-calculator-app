import { ChangeEvent, useContext } from "react"
import BillContext from "../utils/BillContext"

const BillValue = () => {
  const { tip, amount, setAmount } = useContext(BillContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  return (
    <>
      <p>Bill</p>
      <input type="number" onChange={handleChange} placeholder="Custom"></input>
      <p>amount is {amount}</p>
      <p>tip is {tip}</p>
    </>
  )
}

export default BillValue