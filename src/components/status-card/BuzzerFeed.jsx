import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Buzzer from '../electricComponent/Buzzer';
import Loader from '../loader/Loader';

import './statuscard.css'

const BuzzerFeed = props => {
    const  serverLedBuzzerConection  = useSelector((state) => state.ElectricStatusReducer.serverLedBuzzerConection)
    const  buzzer = useSelector((state) => state.ElectricStatusReducer.buzzer)
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <Buzzer />
            </div>
            <div className="status-card__info">
                <h4 style={{ opacity: `${serverLedBuzzerConection ? 1 : 0}` }}>{buzzer > 0 ? "ON" : "OFF"}</h4>
                <div style={{ display: `${!serverLedBuzzerConection ? "block" : "none"}` }}>
                    <Loader topDis={"0px"} />
                </div>
                <span>{props.feed}</span>
            </div>

        </div>
    )
}

export default BuzzerFeed
