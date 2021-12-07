import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { useDispatch } from 'react-redux'
import { ACTIVE_KEY, FEED_BUZZER, FEED_DRV, FEED_GAS, FEED_LED, history } from '../../config/config'
import axios from 'axios'
import { getHistory } from '../../redux/actions/DataAction'
import { getLatestValue, parseValue } from '../../redux/actions/AdafruitAction'
import { getPhoneList } from '../../redux/actions/UserAction'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = props => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    const dispatch = useDispatch();
    useEffect(async () => {
        console.log(history.location.pathname);
        Promise.all([
            getLatestValue(dispatch), 
            getHistory(dispatch),
            getPhoneList(dispatch),

        ])
        return () => {
        }
    }, [])
    return (
        <div className='sidebar'>
            {console.log("Slide Bar")}
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <NavLink to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Sidebar
