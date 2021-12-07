import React, { useEffect } from 'react'

import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Dashboard from '../pages/Dashboard'
import { ACTIVE_KEY, USERNAME, FEED_BUZZER, FEED_LED, USERNAME2, ACTIVE_KEY2, FEED_GAS, FEED_DRV } from "../config/config"
import { getLatestValue } from '../redux/actions/AdafruitAction'
import PersonalInfo from '../pages/PersionalInfo'
import UserSetting from '../pages/UserSetting'
import Documentation from '../pages/Documentation'
import LoginPage from '../pages/LoginPage'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
const Routes = () => {
    // const dispatch = useDispatch();

    useEffect(() => {
        // getLatestValue();
    }, [])

    return (
        <Switch>
            <Route path="/customers" >
                <PersonalInfo />
            </Route>
            <Route path="/settings">
                <UserSetting />
            </Route>
            <Route path="/document">
                <Documentation />
            </Route>
            <Route path="/">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default Routes
