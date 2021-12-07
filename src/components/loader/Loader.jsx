import React from 'react'
import  "./loader.css"
export default function Loader(props) {
    return (
        <div id="preloader">
            <div id="loader" style={{top:`${props.topDis?props.topDis:""}`}}>
                <div className="line-scale-pulse-out">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    )
}
