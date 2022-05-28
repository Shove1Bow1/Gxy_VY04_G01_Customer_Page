import React, { Fragment } from "react";
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import Explore from "./Explore/Explore";
import Partner from "./Partner/Partner";
import Propose from "./Propose/Propose";
import Promotion from "./Promotion/Promotion";
import Advantage from "./Advantage/Advantage";
import MainDiscovery from "./Discovery/MainDiscovery.js"
import FooterHomepage from "./Footer/FooterCustomer";
export default function Homepage(){
    return(
        <div className="container-fluid">  
            <div className="row">
                <div className="col-homepage">
                    <Fragment>
                        <Banner/>
                        <Search />
                        <Promotion />
                        <Partner />
                        <Propose />
                        <Advantage />
                        <Explore />
                        <MainDiscovery/>
                    </Fragment>
                </div>
            </div>    
              
        </div> 
    )
}