export const checkLogin = () => {
    let result = localStorage.getItem("accessToken") && localStorage.getItem("name") && localStorage.getItem("settings") ? true : false;
    // let result = localStorage.getItem("accessToken") && localStorage.getItem("name") ? true : false;
    return result
}
export const getSettingsLocalStorage = (item) => {
    try {
        let settings = JSON.parse(localStorage.getItem("settings"));
        if (settings) {
            return settings[item];
        } else {
            return;
        }
    } catch (error) {

    }


}