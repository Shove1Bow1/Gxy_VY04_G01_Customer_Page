import axios from "axios";
import React, { Component, useState } from "react";
import { useCookies } from "react-cookie";
import './Password.css';

export default function Password() {
    const [getCookies,setCookies]=useCookies();
    const [getOldPassword,setOldPassword]=useState("");
    const [getNewPassword,setNewPassword]=useState("");
    const [getConfirmPassword,setConfirmPassword]=useState("");
    function handleNewPassword(){
        if(getNewPassword!==getConfirmPassword){
            window.alert("Hai Mật khẩu mới không giống nhau");
            return;
        }
        
        if(getCookies.Customer){
            axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/changePassword", {
                OLD_PASSWORD: getOldPassword,
                TOKEN: getCookies.Customer
            }).then(res => {
                if (!res.data.STATUS) {
                    window.alert("Mật khẩu cũ không đúng");
                    return;
                }
            })
            axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/changePassword", {
                NEW_PASSWORD: getNewPassword,
                TOKEN: getCookies.Customer
            }).then(res => {
                if (res.data.STATUS) {
                    window.alert("Thay đổi mật khẩu thành công");
                    window.location.reload();
                }
            })
            return;
        }
    }
    function handleCancel(){
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
    }
    return (
        <div>
            <div>
                <div className='row-head'>
                    <div className='card offset-md-4 col-md-6 '>
                        <div className='card-head'>
                            <div className="pass-head" style={{ fontWeight: "bolder" }}>Đổi mật khẩu</div>
                            <div className="click-btn">
                            <button className="btn-btn-save" onClick={handleNewPassword}>Lưu</button>
                            <button className="btn-btn-cancel" onClick={handleCancel}>Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-body">
                    <div className="card offset-md-4 col-md-6 ">
                        <div className="card-body">
                            <div className="form-group">
                                <div style={{ fontWeight: "bolder" }}>Mật khẩu cũ:</div>
                                <input type="password" placeholder="Nhập mật khẩu hiện tại của bạn" name="oldPassword" className="form-control"
                                    value={getOldPassword} onChange={(e)=>setOldPassword(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <div style={{ fontWeight: "bolder" }}>Mật khẩu mới:</div>
                                <input type="password" placeholder="Nhập mật khẩu mới của bạn" name="newPassword" className="form-control"
                                    value={getNewPassword} onChange={(e)=>setNewPassword(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <div style={{ fontWeight: "bolder" }}>Xác nhận mật khẩu:</div>
                                <input type="password" placeholder="Nhập lại mật khẩu mới của bạn" name="confirmPassword" className="form-control"
                                    value={getConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                            </div>
                            <div>Hảy đảm bảo rằng nó khớp với mật khẩu của bạn</div>
                        </div>
                    </div>
                </div>
                <div className="card offset-md-4 col-md-6">
                    <div className="card-body">
                        <form>
                            <div style={{ fontSize: "20px", fontWeight: "bolder" }}>Xác thực</div>
                            <div style={{ fontWeight: "bold" }}>Gửi mã OTP khi đăng nhập</div>
                            <div>Gửi mã xác thực mới khi tài khoản của tôi đuợc đăng nhập</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
