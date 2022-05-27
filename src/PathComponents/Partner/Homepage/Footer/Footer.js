import React from "react";
import "../Homepage.css";
export default function Footer(){
    return(
        <div className="parent-footer-homepage">
            <div className="child-footer-homepage">
                <div className="block-footer-homepage">
                    <div className="padding-top-div">
                        <h4>Got any questions?</h4>
                    </div>
                    <div className="padding-top-div">
                        <h6>Couldn't find your business on the category above? Or you simply want to have a chat with our team? Send your inquiries to:</h6>
                    </div>
                    <div className="padding-top-div">
                        <i class="fa-solid fa-envelope" style={{color:"rgb(90, 90, 182)"}}></i><h6 style={{ display: "inline-block" }}>partnership@traveloka.com</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}