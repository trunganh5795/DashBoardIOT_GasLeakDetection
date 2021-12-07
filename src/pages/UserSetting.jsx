import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import "./UserSetting.css"
import { Slider } from '@mui/material'
import { getSetting } from '../redux/actions/UserAction'
import { changeSetting } from '../actions/userAction'
export default function UserSetting() {
    const serverKey1Input = useRef(null);
    const serverKey2Input = useRef(null);

    const showPasswordToggle = (ref) => {

        if (ref.current.getAttribute('type') === 'text') {
            ref.current.setAttribute('type', 'password');
        } else {
            ref.current.setAttribute('type', 'text');
        }

    }
    const [settings, setSetting] = useState({ serverkey1: '', serverkey2: '', fanmode: '', fanspeed: '',buzzervalue:'' });
    useEffect(() => {
        setSetting(getSetting());
        return () => {

        }
    }, [])
    return (
        <div className="m-auto" style={{ maxWidth: '500px' }}>
            {console.log("Settings:",settings)}
            <form action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    changeSetting(e.target[2].value, e.target[3].value,e.target[4].value)
                }}
            >
                <div className="py-3 row">
                    <div className="devicesName">
                        <span>SERVER 1 Key</span>
                    </div>
                    <div id="wrapper " className="d-inline  col-5">
                        <div className="form-group d-inline" style={{ position: 'relative' }}>
                            <input type="password" ref={serverKey1Input} onChange={(e) => { console.log(e.target.value) }} value={settings.serverkey1} className="form-control d-inline" style={{ width: '350px', position: 'relative' }} id="password" />
                            <div className="formIcon"
                                onClick={() => showPasswordToggle(serverKey1Input)}
                            >
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 row">
                    <div className="devicesName">
                        <span>SERVER 2 Key</span>
                    </div>
                    <div id="wrapper " className="d-inline  col-5">
                        <div className="form-group has-feedback d-inline" style={{ position: 'relative' }}>
                            <input type="password" ref={serverKey2Input} onChange={(e) => { console.log(e.target.value) }} value={settings.serverkey2} className="form-control d-inline" style={{ width: '350px' }} />
                            <div className="formIcon"
                                onClick={() => showPasswordToggle(serverKey2Input)}
                            >
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 row">
                    <div className="devicesName">
                        <span>FAN Mode</span>
                    </div>
                    <div className="d-inline col-5">
                        <select className="form-select d-inline" value={settings.fanmode} aria-label="Default select example" style={{ width: '350px' }}
                        // onChange={(e)=> setSetting({...settings,fanmode:e.target.value})}
                        onChange={(e)=>setSetting({...settings,fanmode:e.target.value})}
                        >
                            <option value="auto" >Auto</option>
                            <option value="manual">Manual</option>
                        </select>
                    </div>
                </div>
                <div className="py-3 row">
                    <div className="devicesName">
                        <span>FAN Speed</span>
                    </div>
                    <div className="d-inline " style={{ width: '350px', paddingLeft: '15px' }}>
                        {console.log(+settings.fanspeed)}
                        <Slider defaultValue={+settings.fanspeed} key={settings.serverkey2}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            sx={{ width: '350px' }}
                            max={255}
                            min={-255}
                        />
                    </div>
                </div>
                <div className="py-3 row">
                    <div className="devicesName">
                        <span>Buzzer Value</span>
                    </div>
                    <div className="d-inline " style={{ width: '350px', paddingLeft: '15px' }}>
                        {console.log(+settings.fanspeed)}
                        <Slider defaultValue={+settings.buzzervalue} key={settings.serverkey1}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            sx={{ width: '350px' }}
                            max={1023}
                            min={0}
                        />
                    </div>
                </div>
                <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block"
                    >Save Changes</button>
                </div>
            </form>


        </div>
    )
}
