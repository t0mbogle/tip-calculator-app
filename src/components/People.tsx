import { ChangeEvent, useContext } from "react"
import BillContext from "../utils/BillContext"

const People = () => {
  const { people, setPeople } = useContext(BillContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value)
  }

  return (
    <>
      <p>Bill</p>
      <input type="number" onChange={handleChange}></input>
      <p>split between {people}</p>
    </>
  )
}

export default People