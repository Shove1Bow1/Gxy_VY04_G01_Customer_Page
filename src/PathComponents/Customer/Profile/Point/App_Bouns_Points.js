import React from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import "./Bouns_Points.css";
import MyBounsPoints from "./My_Bouns_Points";

const AppBounsPoints = (props)=>{
    return (
        <div>
            <MyBounsPoints value={props.value}/>
        </div>
    )
}
export default AppBounsPoints;