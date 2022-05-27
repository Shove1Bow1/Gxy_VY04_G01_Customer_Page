// Module and component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slide as Menu } from 'react-burger-menu';
import axios from "axios";
import {useCookies} from 'react-cookie';
// Css
import "./NavDropdown.css";
import "./Navbar.css";


const Navbar = () => {
  const [getCustomerName,setCustomerName]=useState("");
  const [getCookies,setCookies,removeCookies]=useCookies();
  useEffect(() => {
    if (getCookies.Customer&&!getCustomerName) {
      axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/getCustomerName", {
        TOKEN: getCookies.Customer,
      }).then(res => {
        setCustomerName(res.data.CUSTOMER_NAME);
        console.log(getCustomerName);
      })
    }
  })
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu styles={{width:"350px"}}>
          <a className="menu-item" href="#">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/455eab646e53732d81380eabadf10b47.svg" style={{}}></img>
            Trang chủ
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg" style={{}}></img>
            Tài khoản
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg" style={{}}></img>
            Đặt chỗ của tôi
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7eb0ddef942f797baed188048d3b44c0.svg" style={{}}></img>
            Hộp thư của tôi
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg" style={{}}></img>
            Hợp tác với chúng tôi
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4c2b56742d3432cbc9a0a2600fbc8bb5.svg" style={{}}></img>
            Vé máy bay
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f35d2c4e9c6c6663f831cca1d2392b3.svg" style={{}}></img>
            Khách sạn
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/36bca62f8840da5ea3670bf693f90f90.svg" style={{}}></img>
            Combo tiết kiệm
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c51ec07e3f7fb509b246825c6b7c6d6d.svg" style={{}}></img>
            Đưa đón sân bay
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/56ad06f2128fa715be3108b2b90e927c.svg" style={{}}></img>
            Xperience
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/44b891a96bfa52b48bbc541a4b1bb226.svg" style={{}}></img>
            Cho thuê xe
          </a>
          <a className="menu-item" href="/">
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/301c3038b8bc837164fca384096404a6.svg" style={{}}></img>
            JR Pass
          </a>
      </Menu>
      <div className="Navbar">
        <span><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"></img></span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/Partner">Hợp tác với chúng tôi</a>
          <a href="/">Đặt chỗ của tôi</a>
          <a href="/">VND</a>
          {!getCustomerName&&!getCookies.Customer?
            <>
              <Link to="/login"><a>Đăng nhập</a></Link>
              <Link to="/Register"><button className="btn">Đăng ký</button></Link>
            </>
            :
            <Link to="/Profile">
                <img src={require("./login.png")} width="40" height="40" />
                <span style={{marginLeft:"10px"}}>Xin chào, {getCustomerName}</span>
            </Link>
          }
         
        </div>
      </div>
      <div className="navbar-small">
        <div className="nav-items-small">
          <select style={{ boxShadow: "none", border: "0", marginRight: "20px" }}>
            <option selected >Vận chuyển</option>
            <option >Vé máy bay</option>
            <option >Combo tiết kiệm</option>
            <option >Cho thuê xe</option>
          </select>
          <select style={{ boxShadow: "none", border: "0", marginRight: "20px" }}>
            <option selected >Chổ ở</option>
            <option >Khách sạn</option>
            <option >Combo tiết kiệm</option>
            <option >Khách sạn các ly</option>
          </select>
          <select style={{ boxShadow: "none", border: "0", marginRight: "20px" }}>
            <option selected >Hoạt động và giải trí</option>
            <option >Xperience</option>
          </select>
          <select style={{ boxShadow: "none", border: "0" }}>
            <option selected >Sản phẩm bổ sung</option>
            <option >Điểm thưởng của tôi</option>
            <option >Phiếu quà tặng</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
