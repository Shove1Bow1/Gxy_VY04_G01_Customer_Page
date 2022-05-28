import React, { useState } from "react";
import "./SideBarDetailSearch.css";
import Datepicker from "../datepick";
import Ticket_one from "./Ticket_one";
import Ticket_two from "./Ticket_two";

function Ticket() {
  const [date, setDate] = useState();
  console.log("Date", date);
  const [openOptionsOne, setOpenOptionsOne] = useState(false);
  const [openOptionsTwo, setOpenOptionsTwo] = useState(false);
  return (
    <div className="sideBarDetai-s-main-ticket">
      <div className="sideBarDetai-s-1-ticket">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                        checked={!openOptionsOne}
                                           
                        onClick={() => setOpenOptionsOne(!openOptionsOne)}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label class="form-check-label" for="inlineFormCheck">
                        <p>
                          <b>Một chiều / Khứ hồi</b>
                        </p>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                        onClick={() => setOpenOptionsTwo(!openOptionsTwo)&&setOpenOptionsOne(openOptionsOne)  }
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label class="form-check-label" for="inlineFormCheck">
                        <p>
                          <b>Nhiều thành phố</b>
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-1">
               
              <div className="container-side-search-2-ticket">
              
                <center>
                  <p style={{ color: "rgb(64, 89, 228)", fontSize:'18px' }}> <img
                  src={require("../Imgsearch/map.png")}
                  style={{ width: "25px", height: "25px",marginBottom:'1%' }}
                /> &nbsp;&nbsp;Mở bản đồ</p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---include 2 & 3-- */}
      {!openOptionsOne && <Ticket_one />}
      {openOptionsTwo && <Ticket_two/>}
      {/* ---include 2 & 3-- */}
    </div>
  );
}

export default Ticket;
