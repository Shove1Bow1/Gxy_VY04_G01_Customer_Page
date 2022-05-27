import React, {useState} from 'react'
import "./SideBarDetail/SideBarDetailSearch.css";

export default function DatePicker() {
    const [date,setDate] = useState();
    console.log("Date",date);
  return (
    <div className='datepicker' style={{ border: "none" }}>
    <input
      class="form-control"
      type="date"
      onChange={(e) => setDate(e.target.value)}
      style={{ width: "190px", height: "40px" }}
    />
  </div>
  )
}
