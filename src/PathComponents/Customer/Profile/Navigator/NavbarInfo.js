import { FaCog, FaPowerOff, FaTag, FaCoins, FaCreditCard, FaBell, FaClipboardList } from "react-icons/fa";
import { GrNotes, } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import './navbar.css';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Auth/SessionCustomer";
import { useCookies } from "react-cookie";
export default function Navbar(props) {
    console.log("Navbar"+props.value);
    const [getCookies,setCookie,removeCookies]=useCookies();
    function runScript(){
        removeCookies("Customer");
    }
    return (
        <div className='card offset-md-2 col-md-2'>
            <div className="list-group">
                <ul className="navbar-nav">
                    <li className="list-group-item list-group-item-action customize-li">
                    </li>
                    <li><Link to={props.value?`${props.value}/Profile/Point`:'/Profile/Point'} className="list-group-item list-group-item-action">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5aee8aca6897d279a7cb105f7e167754.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Điểm thưởng của tôi</span></Link>
                    </li>
                    <li><Link to={props.value?`${props.value}/Profile/CreditCard`:'/Profile/CreditCard'} className="list-group-item list-group-item-action">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/468b3a08ab94b440b4e09fb9130eee1e.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Thẻ của tôi</span></Link>
                    </li>
                    <hr></hr>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Đặt chổ của tôi</span></Link>
                    </li>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0965a06a63e873adb97d5ed7d7b92dbe.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Danh sách giao dịch</span></Link>
                    </li>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/70100d4a2047ac955124953dbc3351db.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Thông báo giá vé máy bay</span></Link>
                    </li>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/18255ae77e4065bc95bc40cc28d4bbb3.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Passenger Quick Pick</span></Link>
                    </li>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/cef9778118bdd85e1062cdd0b6196362.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Khuyến mãi</span></Link>
                    </li>
                    <li><Link to='/Profile' className="list-group-item list-group-item-action">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f527ad371655ee5740f8b755d392823f.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Tài Khoản</span></Link>
                    </li>
                    <li onClick={()=>runScript()}><a href="/" className="list-group-item list-group-item-action" >
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6464840154eb190d10525ea67e77648a.svg" style={{}}></img>
                        <span style={{ fontWeight: "500" }}>Đăng Xuất</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
