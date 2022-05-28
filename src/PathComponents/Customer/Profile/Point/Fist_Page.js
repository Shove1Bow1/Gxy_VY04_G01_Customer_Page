import React from "react";



const FirstPage = (props) =>{
    return(
        <div className="card" style={{padding: "1rem"}}>
            <h2>{props.customerPoint}</h2>
            <p className="size-text" >Giá trị VND</p>
            <hr/>
            <center>
                {
                    props.customerPoint?    
                    <p className="padding-text">
                    Seems like you don't have any Points yet.<br/>
                    Book flight or hotel to earn Points now!
                    </p>:null
                }
            
            </center>

        </div>
    )
}
export default FirstPage

