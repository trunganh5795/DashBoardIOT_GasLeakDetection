import { ACTIVE_KEY, ACTIVE_KEY2, FEED_BUZZER, FEED_DRV, FEED_GAS, FEED_LED, USERNAME, USERNAME2 } from "../../config/config";
import axios from 'axios'
export const getLatestValue = async (dispatch) => {
    let latestValue = await axios.all([
        axios({
            url: `https://io.adafruit.com/api/v2/${USERNAME2}/feeds/${FEED_GAS}/data?limit=1`,
            method: "GET",
            headers: {
                'X-AIO-Key': ACTIVE_KEY2,
                'Content-Type': 'application/json'
            }
        }),
        axios({
            url: `https://io.adafruit.com/api/v2/${USERNAME}/feeds/${FEED_DRV}/data?limit=1`,
            method: "GET",
            headers: {
                'X-AIO-Key': ACTIVE_KEY2,
                'Content-Type': 'application/json'
            }
        }),
        axios({
            url: `https://io.adafruit.com/api/v2/${USERNAME}/feeds/${FEED_LED}/data?limit=1`,
            method: "GET",
            headers: {
                'X-AIO-Key': ACTIVE_KEY,
                'Content-Type': 'application/json'
            }
        }),
        axios({
            url: `https://io.adafruit.com/api/v2/${USERNAME}/feeds/${FEED_BUZZER}/data?limit=1`,
            method: "GET",
            headers: {
                'X-AIO-Key': ACTIVE_KEY,
                'Content-Type': 'application/json'
            }
        })
    ]).then(axios.spread((gasValue, drvValue, ledValue, buzzerValue) => {
        let resultArray = [gasValue, drvValue, ledValue, buzzerValue];
        let value = resultArray.map((item, index) => {
            let itemValue = +JSON.parse(item.data[0].value).data;
            return { [item.data[0].feed_key]: itemValue };
        })
        return value

    })).catch(()=>{})
    if(latestValue){
        latestValue.forEach((item) => {
            if (item[FEED_BUZZER] !== undefined) {
                dispatch({
                    type: 'BUZZER',
                    data: item[FEED_BUZZER]
                })
            } else if (item[FEED_GAS] !== undefined) {
                dispatch({
                    type: 'GAS_SENSOR',
                    data: item[FEED_GAS],
                })
            } else if (item[FEED_DRV] !== undefined) {
                
                dispatch({
                    type: "FAN",
                    data: item[FEED_DRV]
                })
            } else if (item[FEED_LED] !== undefined) {
                
                dispatch({
                    type: "LED",
                    data: item[FEED_LED]
                })
            }
        })
        
        return latestValue;
    }

}
export const parseValue = (message) => {
    let valueString = JSON.parse(message).data.value
    let value = +JSON.parse(valueString).data;
    return value;
}