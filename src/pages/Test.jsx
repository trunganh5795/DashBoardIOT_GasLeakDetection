import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Test() {
    return (
        <div>
            {console.log("test")}
            <NavLink to="/test">Tst</NavLink>
        </div>
    )
}
