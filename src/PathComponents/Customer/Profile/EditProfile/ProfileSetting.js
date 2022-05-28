import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./navi.css";
import CustomerProfile from "./CustomerProfile";
import ChangePassword from "./ChangePassword";
import { Container } from 'react-bootstrap';
import {AuthContext} from '../../../../Auth/SessionCustomer'
const ProfileSetting= (props) => {
    const [getPage,setPage]=useState(1);
    const {CUSTOMER_TOKEN,CUSTOMER_ID,CUSTOMER_NAME}=useContext(AuthContext);
        return (
            <div>
                <nav className='nav'style={{backgroundColor:"white"}}>
                    <ul className='nav-link-1' style={{width: "45%",display: "flex",justifyContent: "space-between",alignItems: "center",listStyle: "none",paddingLeft:"6%"}}>
                        <li>
                            <div className='navi.profile' onClick={()=>setPage(1)}>Thông tin tài khoản</div>
                        </li>
                        <li>
                            <div className='navi.pass' onClick={()=>setPage(2)}>Mật khẩu và bảo mật</div>
                        </li>
                    </ul>
                </nav>
                <div>
                    {getPage===1? <CustomerProfile value={props.value} tokenValue={CUSTOMER_TOKEN} idValue={CUSTOMER_ID}/>:null}
                    {getPage===2? <ChangePassword value={props.value} tokenValue={CUSTOMER_TOKEN} idValue={CUSTOMER_ID}/>:null}
                </div>
            </div>
        
      
    )
}

export default ProfileSetting