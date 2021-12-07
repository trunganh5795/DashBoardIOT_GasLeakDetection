import axios from 'axios'
import { ACTIVE_KEY2, FEED_GAS, USERNAME2 } from '../../config/config'
export const getHistory = async (dispatch) => {
    let result = await axios({
        url: `https://io.adafruit.com/api/v2/${USERNAME2}/feeds/${FEED_GAS}/data?limit=10`,
        method: "GET",
        headers: {
            'X-AIO-Key': ACTIVE_KEY2,
            'Content-Type': 'application/json'
        }
    })
    dispatch({
        type: "DATA_HISTORY",
        data: result.data
    });
    return result.data
}
