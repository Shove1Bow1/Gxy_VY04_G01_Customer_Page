import React, { Component } from "react";
import { Link} from "react-router-dom";

export default function NavLink(props) {
  return (
    <div class="row nav-link dialog-point" style={{width:100+"%"}}>
      <div class={props.getData===1?"col-lg-4 bottom-line":"col-lg-4"}>
        <li className="nav-item-left" >
          <button class="text-color-nav button-nav-item" onClick={() =>props.setData(1)}><b>Khả dụng</b></button>
        </li>
      </div>
      <div class={props.getData===2?"col-lg-4 bottom-line":"col-lg-4"}>
        <li className="nav-item-center">
          <button class="text-color-nav button-nav-item" onClick={() =>props.setData(2)}><b>Đang chờ</b></button>
        </li>
      </div>
      <div class={props.getData===3?"col-lg-4 bottom-line":"col-lg-4"}>
        <li className="nav-item-right">
          <button class="text-color-nav button-nav-item" onClick={() =>props.setData(3)}><b>Lịch sử</b></button>
        </li>
      </div>
    </div>
  )
}
