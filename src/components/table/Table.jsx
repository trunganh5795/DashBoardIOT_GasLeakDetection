import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../loader/Loader'

import './table.css'

const Table = props => {
    const { dataHistory, phoneList, phoneListLoader, dataHistoryLoader } = useSelector((state) => state.DataTableReducers)
    let bodyData = props.selectData === "phoneList" ? phoneList : dataHistory;
    let loader = props.selectData === "phoneList" ? phoneListLoader : dataHistoryLoader;
    // const initDataShow = props.limit && bodyData ? bodyData.slice(0, Number(props.limit)) : bodyData

    // const [dataShow, setDataShow] = useState(initDataShow)
    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(bodyData.length / Number(props.limit))
        pages = bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    // const selectPage = page => {
    //     const start = Number(props.limit) * page
    //     const end = start + Number(props.limit)

    //     setDataShow(bodyData.slice(start, end))

    //     setCurrPage(page)
    // }

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
            {/* {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            } */}
        </div>
    )
}

export default Table
