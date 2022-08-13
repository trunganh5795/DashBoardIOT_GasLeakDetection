const defaultSetting = {
    fanmode: "",
    fanspeed: 0,
    feedbuzzer: "",
    feeddrv: "",
    feedfgas: "",
    feedled: "",
    serverkey1: "",
    serverkey2: "",
}
export const SettingsReducer = (state = defaultSetting, action) => {
    switch (action.type) {
        case "UPDATE_SETTINGS":
            state = action.data;
            
            return state;
        default:
            return state;
    }
}