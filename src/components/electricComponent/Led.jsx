import React from 'react'
import { useSelector } from 'react-redux'
import './Led.css'
export default function Led() {
    const led = useSelector((state) => state.ElectricStatusReducer.led)
    return (
        <div>
            <div className="led-box">
                <div className={led === 1 ? "led-red" : led === 2 ? "led-green" : "led-off"} />
            </div>
        </div>

    )
}
