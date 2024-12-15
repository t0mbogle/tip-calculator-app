import Tip from "./Tip"
import '../styles/selecttip.css'
import BillContext from "../utils/BillContext"
import { ChangeEvent, useContext, useState } from "react"

const SelectTip = () => {
    const context = useContext(BillContext)
    const { tip, setTip } = context

    const [custom, setCustom] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCustom(e.target.value)
        setTip(e.target.value)
    }

    return (
        <>
        <div className="tip-wrapper">
            <h2>Select Tip %</h2>
            <span className="tips">
                <Tip value={"5%"} setCustom={setCustom} />
                <Tip value={"10%"} setCustom={setCustom} />
                <Tip value={"15%"} setCustom={setCustom} />
                <Tip value={"25%"} setCustom={setCustom} />
                <Tip value={"50%"} setCustom={setCustom} />
                <input className="custom-input" placeholder="Custom" type="datetime" maxLength={2} value={custom && tip ? custom : ''} onChange={handleChange}></input>
            </span>
        </div>
        </>
    )
}

export default SelectTip