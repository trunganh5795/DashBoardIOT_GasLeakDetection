import React, { useEffect, useState } from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'
import mqtt from 'mqtt';
import { ACTIVE_KEY, ACTIVE_KEY2, FEED_BUZZER, FEED_BUZZER_NAME, FEED_DRV, FEED_DRV_NAME, FEED_GAS, FEED_LED, FEED_LED_NAME, USERNAME, USERNAME2 } from '../../config/config'
import LoginPage from '../../pages/LoginPage'
import { parseValue } from '../../redux/actions/AdafruitAction'
import { sendData } from '../../actions/userAction'
import { getSettingsLocalStorage } from '../../redux/actions/Helper'
import { sendSMS } from '../../redux/actions/UserAction'
console.log("Layout:", ACTIVE_KEY);

// client.on('connect', () => {console.log("connected to server 1");})
const Layout = (props) => {
    const [client, setClient] = useState({ client: '', client2: '' })
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Useffect")
        //CSE_BBC
        let client = mqtt.connect("mqtt://io.adafruit.com", {
            username: USERNAME,
            password: ACTIVE_KEY,
        });
        //CSE_BBC1
        let client2 = mqtt.connect("mqtt://io.adafruit.com", {
            username: USERNAME2,
            password: ACTIVE_KEY2,
        });
        client.on('connect', () => {
            console.log("connected Client1");
            client.subscribe(`CSE_BBC/feeds/${FEED_BUZZER}/json`);
            client.subscribe(`CSE_BBC/feeds/${FEED_LED}/json`);
            client.subscribe(`CSE_BBC/feeds/${FEED_DRV}/json`);
            //feed_buzzer , feed_led ==> feedID
            dispatch({
                type: "SERVER_LED_BUZZER_CONECTION"
            })
        })
        client2.on('connect', () => {
            console.log("connected Client2");
            client2.subscribe(`CSE_BBC1/feeds/${FEED_GAS}/json`);
            // client2.subscribe(`nonameex1/feeds/${FEED_DRV}/json`);
            dispatch({
                type: "SERVER_GAS_FAN_CONECTION"
            })
        })


        // Message on SERVER 1 => CSE_BBC
        client.on('message', (topic, message) => {
            let value = parseValue(message);
            console.log("Server1 Mess: ", value)
            if (JSON.parse(message).key === FEED_BUZZER) {
                dispatch({
                    type: 'BUZZER',
                    data: value
                })
            } else if (JSON.parse(message).key === FEED_LED) {
                dispatch({
                    type: "LED",
                    data: value
                })
            } else if (JSON.parse(message).key === FEED_DRV) {
                dispatch({
                    type: "FAN",
                    data: value
                })
            }
        })
        // Message on SERVER 2 => CSE_BBC1
        client2.on('message', (topic, message) => {
            let value = parseValue(message);
            console.log(JSON.parse(message).data)
            console.log("Gas Value: ",value)
            if (JSON.parse(message).key === FEED_GAS) {
                
                if (value > 0) {
                    sendData(1, FEED_LED_NAME, FEED_LED, 1, ACTIVE_KEY, USERNAME);
                    //SEND DATA TO FEED_LED
                    sendData(2, FEED_BUZZER_NAME, FEED_BUZZER, 1, ACTIVE_KEY, USERNAME);
                    //SEND DATA TO FEED_BUZZER
                    if (getSettingsLocalStorage('fanmode') === 'auto') {
                        let fanSpeed = +getSettingsLocalStorage('fanspeed')
                        sendData(10, FEED_DRV_NAME, FEED_DRV, fanSpeed, ACTIVE_KEY, USERNAME);
                    }
                    sendSMS();
                    //SEND DATA TO FEED_DRV
                } else {
                    sendData(1, FEED_LED_NAME, FEED_LED, 2, ACTIVE_KEY, USERNAME);
                    //SEND DATA TO FEED_LED
                    sendData(2, FEED_BUZZER_NAME, FEED_BUZZER, 0, ACTIVE_KEY, USERNAME);
                    //SEND DATA TO FEED_BUZZER
                    if (getSettingsLocalStorage('fanmode') === 'auto') {
                        sendData(10, FEED_DRV_NAME, FEED_DRV, 0, ACTIVE_KEY, USERNAME);
                    }
                    //SEND DATA TO FEED_DRV
                }
                dispatch({
                    type: 'ADD_CHART_VALUE',
                    data: JSON.parse(message).data,
                })
                dispatch({
                    type: 'GAS_SENSOR',
                    data: value,
                })
            }

        })


        console.log(client2);
        setClient({ client, client2 })
        return () => {
            console.log("Close connection")
            client.end();
            client2.end();
        }

    }, [])

    return (
        <div>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props} />
                    {console.log(props)}

                </div>
            )} />
            <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                    <Routes />
                </div>
            </div>
        </div>
    )
}

export default Layout
