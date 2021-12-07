const express = require('express');
const { loginRouter } = require('./loginRoute');
const { phoneList, phoneListRoute } = require('./phoneListRoute');
const { sendSMS } = require('./sendSMS');
const { settingRoute } = require('./settingRoute');
const { userInfoRouter } = require('./userInfo');
const rootRoute = express.Router();

rootRoute.use('/login',loginRouter)
rootRoute.use('/setting',settingRoute)
rootRoute.use('/phonelist',phoneListRoute)
rootRoute.use('/info',userInfoRouter)
rootRoute.use('/sms',sendSMS)
module.exports = {
    rootRoute
}