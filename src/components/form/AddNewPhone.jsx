import moment from 'moment'
import React, { Fragment, useRef, useState } from 'react'
import Table from '../../components/table/Table'
import Badge from '../../components/badge/Badge'
import { addNewPhone } from '../../redux/actions/UserAction'
import { useDispatch } from 'react-redux'
const headerTable = {
    header: [
        "ID",
        "Name",
        "Phone",
        "Added on",
        "status"
    ]
}
const status = {
    active: "primary",
    block: "danger"
}
const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderPhoneList = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{moment(item.created).format('MMM Do YYYY')}</td>
        <td>
            <Badge type={status[item.status]} content={item.status} />
        </td>
    </tr>
)
export default function AddNewPhone() {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const dispatch = useDispatch();
    const displayForm = useRef(null)
    return (
        <Fragment>
            <div className='addPhoneForm' ref={displayForm} >
                <form action="">
                    <div>
                        <p className="my-1">Name </p>
                        <input type="text" value={name} className="p-2" style={{ border: '2px solid var(--main-color)', width: '100%', borderRadius: '5px' }}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <p className="my-1">Phone </p>
                        <input type="number" value={phone} className="p-2" style={{ border: '2px solid var(--main-color)', width: '100%', borderRadius: '5px' }}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary me-2" type="button" style={{ width: '100px' }}
                            onClick={() =>{
                                setName('');
                                setPhone('');
                                dispatch(addNewPhone({name,phone}))
                            }}
                        >Add</button>
                        <button className="btn " type="button" style={{ width: '100px', background: '#DD3C54', color: '#fff' }}
                            onClick={() => displayForm.current.style.display = "none"}
                        >Cancel</button>
                    </div>
                </form>
            </div>
            <div className="card">
                <div className="card__header d-flex justify-content-between">
                    <h3>Phone List</h3>
                    <button className="btn btn-primary" type="button"
                        onClick={() => displayForm.current.style.display = "block"}
                    >Add</button>
                </div>
                <div className="card__body">
                    <Table
                        headData={headerTable.header}
                        renderHead={(item, index) => renderOrderHead(item, index)}
                        selectData={"phoneList"}
                        renderBody={(item, index) => renderPhoneList(item, index)}
                    />
                </div>
            </div>
        </Fragment>
    )
}
