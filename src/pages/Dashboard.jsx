import React, { useEffect, useRef } from 'react'

import GasSensor from '../components/status-card/GasSensor'

import Table from '../components/table/Table'

import { history } from '../config/config'
import StepChart from '../components/chart/StepChart'
import LedFeed from '../components/status-card/LedFeed'
import DRVFeed from '../components/status-card/DRVFeed'
import BuzzerFeed from '../components/status-card/BuzzerFeed'
import moment from 'moment'
import { checkLogin } from '../redux/actions/Helper'
import AddNewPhone from '../components/form/AddNewPhone'

const historyTableHeader = {
    head: [
        'sensor',
        'status',
        'time'
    ],
 
}
const renderLeaksHistory = (item, index) => (
    <tr key={index}>
        <td>{item.feed_key}</td>
        <td>{JSON.parse(item.value).data}</td>
        <td style={{ textTransform: "unset" }}>{moment(item.created_at).format('MMM Do YYYY, h:mm:ss a')}</td>
    </tr>
)

const Dashboard = (props) => {
    useEffect(() => {
        if (!checkLogin()) {
            history.push('/login')
        }

    }, [])
    const displayForm = useRef(null);
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <GasSensor />
                            <LedFeed />
                        </div>
                        <div className="col-6">
                            <DRVFeed />
                            <BuzzerFeed />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <StepChart />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>History</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={historyTableHeader.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                renderBody={(item, index) => renderLeaksHistory(item, index)}
                                selectData={"dataHistory"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-8" style={{ position: 'relative' }}>
                    <AddNewPhone/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
