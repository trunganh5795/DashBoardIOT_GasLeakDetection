import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Led from '../electricComponent/Led';
import Loader from '../loader/Loader';

import './statuscard.css'

const LedFeed = props => {
    const led= useSelector((state) => state.ElectricStatusReducer.led)
    const serverLedBuzzerConection = useSelector((state) => state.ElectricStatusReducer.serverLedBuzzerConection)
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <Led />
            </div>
            <div className="status-card__info">
                <h4 style={{ opacity: `${serverLedBuzzerConection ? 1 : 0}` }}>{led > 0 ? "ON" : "OFF"}</h4>
                <div style={{ display: `${!serverLedBuzzerConection ? "block" : "none"}` }}>
                    <Loader topDis={"0px"} />
                </div>
                {/* <span>{props.feed}</span> */}
            </div>

        </div>
    )
}

export default LedFeed
