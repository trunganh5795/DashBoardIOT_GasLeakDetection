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
            console.log("UPDATE_SETTINGS: ",state);
            return state;
        default:
            return state;
    }
}