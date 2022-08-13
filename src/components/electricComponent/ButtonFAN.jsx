import React from 'react'
import { sendData } from '../../actions/userAction'
import { getSettingsLocalStorage } from '../../redux/actions/Helper'
import { ACTIVE_KEY, ACTIVE_KEY2, FEED_DRV, FEED_DRV_NAME, FEED_LED, FEED_LED_NAME, USERNAME, USERNAME2 } from '../../config/config'
import "./button.css"
export default function ButtonFAN(props) {
    return (
        <div style={{ position: 'absolute', right: '-10px' }}>
            <div className="button r" style={{ margin: 'unset', top: 0 }} id="button-1">
                <input type="checkbox" className="checkbox" checked={props.fan === 0 ? true : false} disabled={getSettingsLocalStorage('fanmode') === 'auto' ? true : false}
                    onChange={(e) => {
                        if (e.target.checked) {
                            sendData(10, FEED_DRV_NAME, FEED_DRV, 0, ACTIVE_KEY, USERNAME);
                        } else {                 
                            let fanSpeed = getSettingsLocalStorage('fanspeed');                        
                            sendData(10, FEED_DRV_NAME, FEED_DRV, fanSpeed, ACTIVE_KEY, USERNAME);
                        }
                    }}
                />
                <div className="knobs" />
                <div className="layer" />
            </div>
        </div>
    )
}
