import Tip from "./Tip"
import '../styles/selecttip.css'
import BillContext from "../utils/BillContext"
import { ChangeEvent, useContext } from "react"

const SelectTip = () => {
    const context = useContext(BillContext)
    const { setTip } = context

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTip(e.target.value)
      }

    return (
        <>
        <div className="tip-wrapper">
            <h2>Select Tip %</h2>
            <span className="tips">
                <Tip value={"5%"} />
                <Tip value={"10%"} />
                <Tip value={"15%"} />
                <Tip value={"25%"} />
                <Tip value={"50%"} />
                <input className="custom-input" placeholder="Custom" type="datetime" maxLength={2} onChange={handleChange}></input>
            </span>
        </div>
        </>
    )
}

export default SelectTip