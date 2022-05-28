import React from "react";
import { Link } from "react-router-dom";
export default function SecondHomePage() {
    return (
        <div style={{ position: "relative" }}>
            <ul className="header-second-page container-fuid">
                <div className="container">
                    <Link to="/Partner"><li className="header-item item-link">Home</li></Link>
                    <Link to="/Partner/Login"><li className="header-item item-link-2">Login</li></Link>
                    <Link to="/Partner/Register"><li className="header-item item-link-2">Register</li></Link>
                </div>
            </ul>
            <div className="container-fluid" style={{ height: 1500+ "px"}}>
                <div className="row adding-background1" style={{ height: 50 + "%",display:"flex",justifyContent:"center"}}>
                    <div style={{height:50+"%",marginTop:"15%",color:"white",textAlign:"center"}}>
                        <h2 style={{color:"white"}}>Elevate your business to the next level</h2>
                        <h3>List your property and expose your business to millions of potential guests. Traveloka also lets you manage your accommodation in an easy way; no hassle and no fuss.</h3>
                    </div>
                </div>
                <div className="row text-content" style={{ height: 50 + "%",width:100+"%"}}>
                    <div className="col" style={{textAlign:"center",paddingTop:"20%"}}>
                        <h5>Not Having Account Yet?</h5>
                        <p>Be A Provider to Provide Service and Earn Income</p>
                        <button className="button-30">
                            <a className="a-fixed" href="/Partner/Register">
                                Register
                            </a>
                        </button>
                    </div>
                    <div className="col" style={{textAlign:"center",paddingTop:"20%"}}>
                        <h5>Already Have One?</h5>
                        <p>Let Managing Your Service Right Away</p>
                        <button className="button-30">
                            <a className="a-fixed" href="/Partner/Login">
                                Login
                            </a>
                        </button>
                    </div>
                </div> 
                <div className="row adding-background2" style={{height:50+"%",textAlign:"center"}}>
                    <h4 style={{paddingTop:50}}>Multinational Reach</h4>
                    <h6 style={{paddingTop:400+"px"}}>Traveloka is now available across the world and always expands. Giving you more opportunities to catch the attention of potential guests.</h6>
                </div>
                <div className="bottom-second-homepage" style={{height:30+"%",justifyContent:"center",display:"inline-block",paddingLeft:"2%",paddingTop:"200px",textAlign:"center"}}>
                    <h4>Ready To Become A Partner?</h4>
                    <h5>Contact us Now Or You Can Fill This Form Below</h5>
                    <button className="button-5">
                        <a className="a-fixed b-fixed" href="/Partner/Register">
                            Register
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}