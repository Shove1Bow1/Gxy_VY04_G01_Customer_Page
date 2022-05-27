import React, { useState } from "react";
import Footer from "./Footer/Footer.js";
import InfoBox from "./InfoBox/InfoBox.js";
import NavigateHomepage  from "./NavigateHomepage";
import SecondBody from "./SecondBody/SecondBody.js";
import ThirdBody from "./ThirdBody/ThirdBody.js";
export default function PartnerHomepage(){
    return (  
        <div className="all-homepage">
            <div className="head-homepage">
                <NavigateHomepage />
            </div>
            <div className="body-homepage">
                <InfoBox />
                <SecondBody />
            </div>
            <footer className="footer-homepage">
                <Footer />
            </footer>
        </div>
    )
}
