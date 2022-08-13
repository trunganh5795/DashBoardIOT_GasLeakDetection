import React from 'react'
import { useSelector } from 'react-redux'
import './Fan.css'
export default function Fan() {
    const fan = useSelector((state) => state.ElectricStatusReducer.fan);
    return (
        <div id="fan">
            <div className="blades"  style={{ animation:`${fan !== 0 ? "" : "unset"}` }}>
                <div className="b1" />
                <div className="b2" />
                <div className="b3" />
            </div>
        </div>
    )
}
