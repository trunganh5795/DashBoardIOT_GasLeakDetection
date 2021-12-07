import React from 'react'
import { useSelector } from 'react-redux'
import "./WarningIcon.css"
export default function WarningIcon() {
    const gasSensor = useSelector((state) => state.ElectricStatusReducer.gasSensor)
    return (
        <div style={{ position: 'absolute', display: `${gasSensor > 0 ? "block" : "none"}` }}>
            {/* {console.log("Gas sensor: ", gasSensor)} */}
            <div className="area">⚠</div>
        </div>
    )
}
