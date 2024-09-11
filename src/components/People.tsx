import { ChangeEvent, useContext } from "react"
import BillContext from "../utils/BillContext"

const People = () => {
  const { setPeople } = useContext(BillContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value)
  }

  return (
    <>
      <input type="number" onChange={handleChange}></input>
    </>
  )
}

export default People