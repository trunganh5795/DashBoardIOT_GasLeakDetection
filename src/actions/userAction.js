import axios from "axios"
import { ACTIVE_KEY, history, USERNAME } from "../config/config"
import { checkLogin } from "../redux/actions/Helper";

export const getLastest = async (feedName) => {
    let result = await axios({
        url: `https://io.adafruit.com/api/v2/${USERNAME}/feeds/${feedName}/data/last`,
        method: 'GET',
        headers: {
            "X-AIO-Key": `${ACTIVE_KEY}`,
            "Content-Type": 'application/json'
        }
    })
    return +JSON.parse(result.data.value).data;
}
export const sendData = async (id, feedName, feedID, value, active_key, userName) => {
    await axios({
        method: 'POST',
        url: `https://io.adafruit.com/api/v2/${userName}/feeds/${feedID}/data`,
        data: {
            value: `{"id": "${id}","name":"${feedName}","data": "${value}","unit": ""}`
        },
        headers: {
            "X-AIO-Key": `${active_key}`,
            "Content-Type": 'application/json'
        }
    })
}
export const changeSetting = async (fanmode, fanspeed, buzzervalue) => {
    if (!checkLogin()) return history.push('/login')
    let token = localStorage.getItem("accessToken")
    let settings = JSON.parse(localStorage.getItem('settings'));
    settings = { ...settings, fanmode, fanspeed, buzzervalue }
    try {
        await axios({
            url: 'http://localhost:7000/setting',
            method: 'post',
            data: settings,
            headers: {
                authorization: token
            }

        })
        console.log(fanmode, fanspeed);
        localStorage.setItem('settings', JSON.stringify(settings));
    } catch (error) {

    }
}