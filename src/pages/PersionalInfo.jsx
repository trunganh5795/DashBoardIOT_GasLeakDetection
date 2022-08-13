import React, { useEffect, useState } from 'react'
import "./PersionalInfo.css"
import user_image from '../assets/images/hansohee.png'
import { NavLink } from 'react-router-dom'
import { history } from '../config/config'
import { getInfo, updateInfo } from '../redux/actions/UserAction'
const PersonalInfo = () => {
    const [userInfo, setUserinfo] = useState({ name: '', email: '', address: '', phone: '', img: '' })
    const [imgPreview, setImgPreview] = useState('');
    useEffect(async () => {
        let userInfo = await getInfo();
        setUserinfo(userInfo)
    }, []);

    return (
        <div>
            <h2 className="page-header">
                Personal Information
            </h2>
            <div className="row personal-info">
                <div className="container content clear-fix">
                    <div className="row" style={{ height: '100%' }}>
                        <div className="col-md-3">
                            <div href="#" className="d-inline">
                                <div className="topnav__right-user__image" style={{ width: '200px', height: '200px', margin: 'auto' }}>
                                    <img src={imgPreview || userInfo.img} alt="" />
                                </div>
                                <div className="text-center mt-4">
                                    <label htmlFor="uploadImg" className="btn btn-primary btn-block">
                                        <input  id="uploadImg" accept="image/png, image/jpeg" type="file" name="photo" style={{ display: 'none' }}
                                            onChange={(e) => {
                                                setImgPreview(URL.createObjectURL(e.target.files[0]));
                                                setUserinfo({...userInfo,img:e.target.files[0]})
                                            }}
                                        />
                                        Upload Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        updateInfo(userInfo);
                                    }}
                                >
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input value={userInfo.name} type="text" className="form-control" id="fullName"
                                        onChange={(e)=>{setUserinfo({...userInfo,name:e.target.value})}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input value={userInfo.email} type="email" className="form-control" id="email"
                                        disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input value={userInfo.phone} type="number" className="form-control" id="phone"
                                        onChange={(e)=>{setUserinfo({...userInfo,phone:e.target.value})}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input value={userInfo.address} type="text" className="form-control" id="address"
                                        onChange={(e)=>{setUserinfo({...userInfo,address:e.target.value})}}
                                        />
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-6">
                                            <button type="submit" className="btn btn-primary btn-block"
                                            >Save Changes</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo




