import { ChangeEvent, useContext } from "react"
import BillContext from "../utils/BillContext"

const People = () => {
  const { people, setPeople } = useContext(BillContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value)
  }

  return (
    <>
      <input type="number" value={people} onChange={handleChange}></input>
    </>
  )
}

export default People