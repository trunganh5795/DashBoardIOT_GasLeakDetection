import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'



import { logout } from '../../redux/actions/UserAction'

const user_menu =[
    {
        content:"Log out"
    }
]
const renderUserMenu = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span style={{cursor:'pointer'}}
            onClick={() => logout()}
        >{item.content}</span>
    </div>

)

const Topnav = () => {
    return (
        <div className='topnav' style={{ flexDirection: "row-reverse", height: '80px' }}>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Topnav
