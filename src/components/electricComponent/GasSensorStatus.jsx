import React from 'react'
import { useSelector } from 'react-redux'
import "./GasSensor.css"
export default function GasSensorStatus() {
    const gasSensor = useSelector((state) => state.ElectricStatusReducer.gasSensor);
    
    return (
        <div className="hover14 column-shine" style={{ display: `${gasSensor < 1 ? "block" : "none"}` }}>
            {/* {console.log("Gas Safe: ", gasSensor)} */}
            <figure><img height="60px" src="./img/safe.png" /></figure>
        </div>
    )
}
