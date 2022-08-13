import axios from "axios"
import { history } from "../../config/config"
import { checkLogin } from "./Helper"

export const loginFeature = ({ usr, pass }) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                method: 'POST',
                url: 'http://localhost:7000/login',
                data: {
                    usr, pass
                }
            })      
            const { token, phonelist, settings, name } = result.data;
            localStorage.setItem('accessToken', token)
            localStorage.setItem('name', name)
            localStorage.setItem('settings', JSON.stringify(settings))
            history.push('/')
        } catch (error) {
             
        }
    }

}
export const getSetting = () => {
    let settings = localStorage.getItem('settings')
    return JSON.parse(settings)
}
export const getInfo = async () => {
    if (!checkLogin()) return history.push('/login')
    let token = localStorage.getItem("accessToken")
    let result = await axios({
        url: 'http://localhost:7000/info',
        method: 'get',
        headers: {
            authorization: token
        }
    })
    return result.data
}
export const updateInfo = async (data) => {
    if (!checkLogin()) return history.push('/login')
    let token = localStorage.getItem("accessToken")
    let formdata = new FormData();
    formdata.append('file', data.img)
    
    let newData = {...data}
    delete newData.img;

    formdata.append('data', JSON.stringify(newData))
    let result = await axios({
        url: 'http://localhost:7000/info',
        method: 'put',
        data:formdata,
        headers: {
            'Content-Type': 'multipart/form-data',
            authorization: token
        }
    })
}


export const getPhoneList = async (dispatch) => {
    if (!checkLogin()) return history.push('/login');
    let token = localStorage.getItem("accessToken")
    let result = await axios({
        url: `http://localhost:7000/phonelist`,
        method: "GET",
        headers: {
            authorization: token
        }
    })
    dispatch({
        type: "PHONE_LIST",
        data: result.data
    });
    return result.data
}
export const sendSMS = () => {
    if (!checkLogin()) return history.push('/login')
    let token = localStorage.getItem("accessToken")
    axios({
        url: 'http://localhost:7000/sms',
        method: 'get',
        headers: {
            authorization: token
        }
    })
}
export const addNewPhone =  ({ name, phone }) => {
    return async (dispatch) => {
        if (!checkLogin()) return history.push('/login')
        let token = localStorage.getItem("accessToken")
        await axios({
            url: 'http://localhost:7000/phonelist',
            method: 'post',
            data: { name, phone },
            headers: {
                authorization: token
            }
        })
        getPhoneList(dispatch);
    }
}

export const logout = () => {
    localStorage.clear();
    return history.push('/login')
}