import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import GasSensorStatus from '../electricComponent/GasSensorStatus';
import WarningIcon from '../electricComponent/WarningIcon';
import Loader from '../loader/Loader';
import './statuscard.css'
const GasSensor = props => {
    const serverFanGasConection = useSelector((state) => state.ElectricStatusReducer.serverFanGasConection);
    const gasSensor = useSelector((state) => state.ElectricStatusReducer.gasSensor)
    return (
        <div className='status-card gas_card'>
            <div className="status-card__icon">
                <GasSensorStatus />
                <WarningIcon />
            </div>
            <div className="status-card__info">
                <h4 style={{ opacity: `${serverFanGasConection ? 1 : 0}` }}>{gasSensor > 0 ? "ALERT" : "SAFE"}</h4>
                <div style={{ display: `${!serverFanGasConection ? "block" : "none"}` }}>
                    <Loader topDis={"0px"} />
                </div>
                <span>{props.feed}</span>
            </div>

        </div>
    )
}

export default GasSensor
