import React, { Component, useState } from "react";
import SecondPage from "./Second_Page";
import ThirdPage from "./Third_Page";
import FirstPage from "./Fist_Page";
import Nav from "./NavLink";
export default function DialogDetail(props) {
  const [getPage, setPage] = useState(1);
  return (
    <>
      {
        props.isOpen?
        <div className="dialogstyle" style={{postion:"absolute", backgroundcolor: "rgba(0,0,0,0.5)"}}>
          <div className="row">
            <div class="col-sm-4">
              <p className="text-color-blur font-size">Chi Tiết</p>
            </div>
            <div class="col-sm-8 text-diaolog-right">
              <button
                className="dialogCloseButton text-color-blur"
                onClick={()=>props.onClose(false)}
                >
                X
              </button>
            </div>
          </div>
          <div>
            <Nav getData={getPage} setData={setPage} />
            <div>
              {getPage === 1 ? <FirstPage customerPoint={props.customerPoint}/> : null}
              {getPage === 2 ? <SecondPage /> : null}
              {getPage === 3 ? <ThirdPage /> : null}
            </div>
          </div>
        </div>:null
      }
    </>
  );
}
