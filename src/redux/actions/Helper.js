export const checkLogin = () => {
    let result = localStorage.getItem("accessToken") && localStorage.getItem("name") && localStorage.getItem("settings") ? true : false;
    return result
}
export const getSettingsLocalStorage = (item) => {
    let settings= JSON.parse(localStorage.getItem("settings"));
    return settings[item];

}