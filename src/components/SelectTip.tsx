import Tip from "./Tip"
import '../styles/selecttip.css'
import BillContext from "../utils/BillContext"
import { ChangeEvent, useContext, useState } from "react"

const SelectTip = () => {
    const context = useContext(BillContext)
    const { tip, setTip } = context

    const [custom, setCustom] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        if (parseFloat(input) < 100) {
            setCustom(e.target.value)
            setTip(e.target.value)
        }
    }

    return (
        <>
        <div className="tip-wrapper">
            <div className="tip-input-header">
                <p>Select Tip %</p>
            </div>
            <span className="tips">
                <Tip value={"5%"} setCustom={setCustom} />
                <Tip value={"10%"} setCustom={setCustom} />
                <Tip value={"15%"} setCustom={setCustom} />
                <Tip value={"25%"} setCustom={setCustom} />
                <Tip value={"50%"} setCustom={setCustom} />
                <input className="custom-input" 
                    placeholder="Custom" 
                    type="number"
                    value={custom && tip ? custom : ''} 
                    onWheel={(e) => (e.target as HTMLElement).blur()}
                    onChange={handleChange}>
                </input>
            </span>
        </div>
        </>
    )
}

export default SelectTip