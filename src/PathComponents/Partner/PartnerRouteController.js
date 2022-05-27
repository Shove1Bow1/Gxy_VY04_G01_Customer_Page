import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes,Route,Navigate,Link  } from "react-router-dom";
import {useCookies} from 'react-cookie';
import axios from 'axios';
// import '../../App.css';
import Register from "./Register/GroupRegister";
import Login from "./Login/Login";
import Homepage from "./Homepage/Homepage"
import GeneralProfile from "./GeneralProfile/GeneralProfile";
import SecondHomePage from "./SecondHomePage/SecondHomePage";
import "./SecondHomePage/ButtonEffect.css";
// import "./PartnerRegisterAndLogin.css";
const PartnerRouteController=()=>{
    const[getCookies,setCookies]=useCookies();
    const[getStatus,setStatus]=useState(false);
    console.log(getCookies.Partner);
    useEffect(()=>{
        if(getCookies.Partner){
          axios.post("https://gxyvy04g01backend-production.up.railway.app/Partner/getStatus",{
            TOKEN:getCookies.Partner
          }).then(res=>{
            if(res.data.STATUS)
              setStatus(res.data.STATUS)
          })
      }})
    const RouteAuth = ({ children }) => {
        if (getStatus) {
          return children;
        }
        return <Navigate to="/Partner" />;
      }
      const RouteNonAuth = ({ children }) => {
        if (!getStatus) {
          return children;
        }
        return <Navigate to="/Partner" />;
      }
    return(
      <>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/SecondHomepage" element={<SecondHomePage />} />
          <Route path='/Login' element={
            <RouteNonAuth>
              <Login />
            </RouteNonAuth>
          } />
          <Route path='/Register' element={
            <RouteNonAuth>
              <Register />
            </RouteNonAuth>
          } />
          <Route path="/Profile" element={
            // <RouteAuth>
              <GeneralProfile />
            // </RouteAuth>
          } />
        </Routes>
      </>
    )
}
export default PartnerRouteController;