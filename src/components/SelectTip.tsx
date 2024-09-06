// import React from "react";
import Tip from "./Tip"
import './selecttip.css'

const SelectTip = () => {

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
                <input className="custom-input" placeholder="Custom" type="datetime" maxLength={2}></input>
            </span>
        </div>
        </>
    )
}

export default SelectTip