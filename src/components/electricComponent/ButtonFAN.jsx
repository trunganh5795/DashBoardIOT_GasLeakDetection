import React from 'react'
import { sendData } from '../../actions/userAction'
import { getSettingsLocalStorage } from '../../redux/actions/Helper'
import { ACTIVE_KEY, ACTIVE_KEY2, FEED_DRV, FEED_DRV_NAME, FEED_LED, FEED_LED_NAME, USERNAME, USERNAME2 } from '../../config/config'
import "./button.css"
export default function ButtonFAN(props) {
    return (
        <div style={{ position: 'absolute', right: '-10px' }}>
            {console.log(getSettingsLocalStorage('fanmode'))}
            <div className="button r" style={{ margin: 'unset', top: 0 }} id="button-1">
                {console.log("FAN toggle: ", props.fan)}
                <input type="checkbox" className="checkbox" checked={props.fan === 0 ? true : false} disabled={getSettingsLocalStorage('fanmode') === 'auto' ? true : false}
                    onChange={(e) => {
                        if (e.target.checked) {
                            console.log("checked");
                            sendData(10, FEED_DRV_NAME, FEED_DRV, 0, ACTIVE_KEY, USERNAME);
                        } else {
                            console.log("unchecked");
                            let fanSpeed = getSettingsLocalStorage('fanspeed');
                            console.log(fanSpeed);
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
