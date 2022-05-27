import React,{useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import SideBar from "./SideBar";
import "./style.css";
export default function GeneralProfile(){
    const [isShow, setShow] = useState(false);
    const [getCookies,setCookies,removeCookies]=useCookies();
    useEffect(()=>{

    })
    function SignOut(){
        removeCookies("Partner");
    }
    return(
        <>
            <div id="wrapper" className={isShow ? "toggled" : null}>
                <div class="overlay" style={isShow ? {} : { display: "none" }}></div>
                <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul class="nav sidebar-nav">
                        <div class="sidebar-header">
                            <div class="sidebar-brand">
                                <a href="#">Brand</a></div></div>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Flight</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Apart</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Hotel</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Car Rentals</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Voucher</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Combo</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Eats</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Xperience</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Car</a></li>
                        <li><a href="/Partner/SecondHomepage" onClick={()=>SignOut()} style={{textAlign:"start"}}>Signout</a></li>
                    </ul>
                </nav>
                <div id="page-content-wrapper">
                    <button type="button" class={isShow ? "hamburger animated fadeInLeft is-open" : "hamburger animated fadeInLeft is-closed"} onClick={() => setShow(!isShow)} data-toggle="offcanvas">
                        <span class="hamb-top"></span>
                        <span class="hamb-middle"></span>
                        <span class="hamb-bottom"></span>
                    </button>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-2">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}