import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../loader/Loader'

import './table.css'

const Table = props => {
    const { dataHistory, phoneList, phoneListLoader, dataHistoryLoader } = useSelector((state) => state.DataTableReducers)
    let bodyData = props.selectData === "phoneList" ? phoneList : dataHistory;
    let loader = props.selectData === "phoneList" ? phoneListLoader : dataHistoryLoader;

    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(bodyData.length / Number(props.limit))
        pages = bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: `${loader ? "block" : "none"}` }}>
                <Loader />
            </div>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        bodyData && props.renderBody ? (
                            <tbody>
                                {
                                    bodyData.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
        </div>
    )
}

export default Table
