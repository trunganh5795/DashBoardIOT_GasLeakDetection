const StatusValue = {
    led: 0,
    fan: 1,
    buzzer: 0,
    gasSensor:0,
    serverLedBuzzerConection:false,
    serverFanGasConection:false,
}
export const ElectricStatusReducer = (state = StatusValue, action) => {
    switch (action.type) {
        case "LED":
            state.led = action.data;
            return {...state}
        case "BUZZER":
            state.buzzer = action.data;
            return {...state}
        case "FAN":
            state.fan = action.data;
            return {...state}
        case "GAS_SENSOR":
            state.gasSensor = action.data;
            return {...state}
        case "SERVER_LED_BUZZER_CONECTION":
            state.serverLedBuzzerConection = true;
            console.log("SERVER_LED_BUZZER_CONECTION: ",state.serverLedBuzzerConection);
            return {...state}
        case "SERVER_GAS_FAN_CONECTION":
            state.serverFanGasConection = true;
            console.log(state.serverFanGasConection);
            return {...state}
        default:
            return state
    }

}