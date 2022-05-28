import { faCar, faCodeFork, faHotel, faHouse, faPlane, faSuitcase, faSuitcaseRolling, faUtensils, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {React,useState,useEffect} from "react";
import HolidayStays from "./HolidayStays.js";
import Hotel from "./Hotel.js";
import "../Homepage";
import AirportTransfer from "./AirportTransfer.js";
import Xperience from "./Xperience.js";
import Flight from "./Flight.js";
import CarRentals from "./CarRentals.js";
import Restaurant from "./Restaurants.js";
export default function InfoBox(){
   const[getId,setId]=useState(1);
   const NavBox=()=>{
        return(
            <div className="child-nav-box">
                <button className={getId===1?'miniBox-Active':'miniBox'}  onClick={()=>setId(1)}>
                    <span>
                        <FontAwesomeIcon icon={faHouse} size="2x" />
                    </span>
                    <h6>Holiday stays</h6>
                </button >

                <button className={getId===2?'miniBox-Active':'miniBox'}  onClick={()=>setId(2)}>
                    <span>
                        <FontAwesomeIcon icon={faHotel} size="2x" />
                    </span>
                    <h6>Hotel</h6>
                </button>

                <button className={getId===3?'miniBox-Active':'miniBox'} onClick={()=>setId(3)}>
                    <span>
                        <FontAwesomeIcon icon={faVanShuttle} size="2x" />
                    </span>
                    <h6>Airport Transfer</h6>
                </button>

                <button className={getId===4?'miniBox-Active':'miniBox'} onClick={()=>setId(4)}>
                    <span>
                        <FontAwesomeIcon icon={faSuitcaseRolling} size="2x" />
                    </span>
                    <h6>Xperience</h6>
                </button >

                <button className={getId===5?'miniBox-Active':'miniBox'} onClick={()=>setId(5)}>
                    <span>
                        <FontAwesomeIcon icon={faPlane} size="2x" />
                    </span>
                    <h6>Flight</h6>
                </button >

                <button className={getId===6?'miniBox-Active':'miniBox'} onClick={()=>setId(6)}>
                    <span>
                        <FontAwesomeIcon icon={faCar} size="2x" />
                    </span>
                    <h6>Car rental</h6>
                </button >
                <button className={getId===7?'miniBox-Active':'miniBox'} onClick={()=>setId(7)}>
                    <span>
                        <FontAwesomeIcon icon={faUtensils} size="2x" />
                    </span>
                    <h6>Restaurant</h6>
                </button >
            </div>
        
        )
    }
    return(
        <div className="BoxBorder">
            <div className="nav-Box">
                <NavBox/>
            </div>
            {getId===1?<HolidayStays/>:null}
            {getId===2?<Hotel/>:null}
            {getId===3?<AirportTransfer/>:null}
            {getId===4?<Xperience/>:null}
            {getId===5?<Flight/>:null}
            {getId===6?<CarRentals/>:null}
            {getId===7?<Restaurant/>:null}
        </div>
    ) 
    
}
