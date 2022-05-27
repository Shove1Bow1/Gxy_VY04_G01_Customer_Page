import React, { useState } from "react";
import AirplaneTicket from "./AirplaneTicket";
import EconomizeCombo from "./EconomizeCombo";
import Hotels from "./Hotels";
import "./MainDiscovery.css";
import Xperience from "./Xperience";
const MainDiscovery=()=>{
    const _2="col-2-customize-discovery";
    const _1="draw-bottom-line col-2-customize-discovery";
    const [getPage,setPage]=useState(1);
    return(
        <div className="discovery-homepage-main">
            <h4>Bạn muốn khám phá điều gì?</h4>
            <div className="top-navigation-discovery">
                <div className={getPage===1?_1:_2}>
                    <button onClick={()=>setPage(1)}>Vé May Bay</button>
                </div>
                <div className={getPage===2?_1:_2}>
                    <button onClick={()=>setPage(2)}>Các Khách Sạn</button>
                </div>
                <div className={getPage===3?_1:_2}>
                    <button onClick={()=>setPage(3)}>Combo vé máy bay và khách sạn</button>
                </div>
                <div className={getPage===4?_1:_2}>
                    <button onClick={()=>setPage(4)}>Du lịch</button>
                </div>
            </div>
            <div className="info-box-discovery">
                {getPage===1?<AirplaneTicket/>:null}
                {getPage===2?<Hotels/>:null}
                {getPage===3?<EconomizeCombo/>:null}
                {getPage===4?<Xperience/>:null}
            </div>
        </div>
    )
}
export default MainDiscovery;