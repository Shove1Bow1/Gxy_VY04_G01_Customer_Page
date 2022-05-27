import React,{useContext,useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Navigator/NavbarInfo";
import ProfileSetting from "./EditProfile/ProfileSetting";
import CreditCard from "./CreditCard/CreditCardManager";
import Point from "./Point/App_Bouns_Points";
import "./ProfileController.css"
export default function ProfileController(props){
    return (
        <div className="customer-profile-controller" style={{heigh:"1000px"}}>
            <div className="customer-sidebar">
                <SideBar/>
            </div>
            <div style={{Width:"100%",Height:"800px"}}>
                <Routes>
                    <Route path="/" element={<ProfileSetting/>} />
                    <Route path="/Point" element={<Point/>} />
                    <Route path="/Creditcard" element={<CreditCard/>} />
                </Routes>
            </div>
        </div>
    )
}