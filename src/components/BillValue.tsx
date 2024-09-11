import { ChangeEvent, useContext } from "react"
import BillContext from "../utils/BillContext"

const BillValue = () => {
  const { setAmount } = useContext(BillContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  return (
    <>
      <input type="number" onChange={handleChange} placeholder="Custom"></input>
    </>
  )
}

export default BillValue