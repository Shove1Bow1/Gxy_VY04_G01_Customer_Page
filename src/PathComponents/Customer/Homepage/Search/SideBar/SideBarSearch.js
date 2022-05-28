import React from "react";
import "../Search.css";
import { Link } from "react-router-dom";

function SideBarSearch() {
  return (
    <div className="SideBar">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="SidebarList">
            <p style={{ color: "black" }}>
              &nbsp;&nbsp;
              <img
                src={require("./Imgsearch/plane.png")}
                style={{ width: "16px", height: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Vé máy bay</b>
            </p>
          </div>
        </Link>
        <Link to="/hotel" style={{ textDecoration: "none" }}>
          <div className="SidebarList">
            <p style={{ color: "black" }}>
              &nbsp;&nbsp;
              <img
                src={require("./Imgsearch/hotel.png")}
                style={{ width: "16px", height: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Khách sạn</b>
            </p>
          </div>
        </Link>
        <Link to="/combo" style={{ textDecoration: "none" }}>
          <div className="SidebarList">
            <p style={{ color: "black" }}>
              &nbsp;&nbsp;
              <img
                src={require("./Imgsearch/combo.png")}
                style={{ width: "16px", height: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Combo tiết kiệm</b>
            </p>
          </div>
        </Link>
        <Link to="/airfield" style={{ textDecoration: "none" }}>
          <div className="SidebarList">
            <p style={{ color: "black" }}>
              &nbsp;&nbsp;
              <img
                src={require("./Imgsearch/airfield.png")}
                style={{ width: "16px", height: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Đưa đón sân bay</b>
            </p>
          </div>
        </Link>
        <Link to="/experience" style={{ textDecoration: "none" }}>
          <div className="SidebarList">
            <p style={{ color: "black" }}>
              &nbsp;&nbsp;
              <img
                src={require("./Imgsearch/experience.png")}
                style={{ width: "16px", height: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Experience</b>
            </p>
          </div>
        </Link>
        <Link to="/hireCar" style={{ textDecoration: "none" }}>
          <div className="SidebarList">
            <p style={{ color: "black" }}>
              &nbsp;&nbsp;
              <img
                src={require("./Imgsearch/hireCar.png")}
                style={{ width: "16px", height: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Cho thuê xe</b>
            </p>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default SideBarSearch;
