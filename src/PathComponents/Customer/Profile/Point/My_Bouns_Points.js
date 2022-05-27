import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DialogDetail from "./Dialog_Deatail";
import { useCookies } from "react-cookie";
import axios from "axios";
export default function MyBounsPoints() {
  const [getCookies,setCookies]=useCookies();
  const [getPoint,setPoint]=useState(0);
  const [getOpen, setOpen] = useState(false); 
  useEffect(()=>{
    axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/postPointAvailable",{
      TOKEN:getCookies.Customer,
    }).then(res=>{
      setPoint(res.data.POINT_AVAILABLE);
    })
  })
  return (
    <>
      <div class="row padding-top">
        <div class="col-sm-11 padding-left1 text-color padding-top">
          <a>Tìm hiểu thêm </a>
        </div>
        <div class=" offset-md-4 col-md-6">
          <h4>Điểm thưởng của tôi</h4>
        </div>
      </div>
      <div className="Body-point">
        <div className="offset-md-4 col-md-10">
          <div class="row">
            <div class="card col-md-2 paint-card">
              <p></p>
              <p ><button onClick={() => setOpen(true)} className="buttonDialog-2">Điểm khả dụng</button></p>
              <div className="body-point">
                <h4>&nbsp;{getPoint}</h4>
                <b>&nbsp;(Dựa trên quy đổi trị giá VND)</b>
                <br />
                <br />
                <p><b class="text-color-blur-2">&nbsp;+0 Điểm đang chờ</b></p>
              </div>
            </div>
            <div class="card col-md-6">
              <div class="row padding-top">
                <div class="col-sm-5">
                  <h6 class="text-color-blur">&ensp;Tiến trình tích điểm</h6>
                </div>
                <div class="col-sm-7">
                  <h6 class="padding-left1">
                    <button onClick={() => setOpen(true)} class=" text-color buttonDialog">Chi Tiết</button>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogDetail
        customerPoint={getPoint}
        isOpen={getOpen}
        onClose={setOpen}>
      </DialogDetail>
      <div class="bg-clor mar-text"></div>
    </>
  );
}

