
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import "./Search.css";
import SideBarSearch from './SideBar/SideBarSearch';
import Ticket from './SideBar/SideBarDetail/Ticket';
import Hotel from './SideBar/SideBarDetail/Hotel';
import Combo from './SideBar/SideBarDetail/Combo';
import HireCar from './SideBar/SideBarDetail/HireCar';
import Airfield from './SideBar/SideBarDetail/Airfield';
import Experience from './SideBar/SideBarDetail/Experience';
import CustomSearch from './CustomSearch';
import { Link } from "react-router-dom";


class Search extends Component {
    render() {
        return ( <>
            <div className="container-search">
                <div className='card'>
                    <div className="row">
                        <div className="col-2">
                        <div className="SideBar">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="SidebarList">
            <p style={{ color: "black" }}>
              &nbsp;&nbsp;
              <img
                src={require("./SideBar/Imgsearch/plane.png")}
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
                src={require("./SideBar/Imgsearch/hotel.png")}
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
                src={require("./SideBar/Imgsearch/combo.png")}
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
                src={require("./SideBar/Imgsearch/airfield.png")}
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
                src={require("./SideBar/Imgsearch/experience.png")}
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
                src={require("./SideBar/Imgsearch/hireCar.png")}
                style={{ width: "16px", height: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Cho thuê xe</b>
            </p>
          </div>
        </Link>
      </ul>
    </div>
                        </div>
                        <div className="col-10">
                            <div className="row">
                                <label class='text-name'>Thành phố, địa điểm hoặc tên khách sạn:</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Thành phố, khách sạn, điểm đến" />
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label class='text-name'>Nhận phòng:</label>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='00/00/00'/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <label class='text-name'>Số đêm:</label>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='0 đêm' />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <label class='text-name'>Trả phòng:</label>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='00/00/00'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label class='text-name'>Khách và phòng:</label>
                            <div className="row">
                                <div className="col-8">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='0 người lớn, 0 trẻ em, 0 phòng'/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button class="btn-search "> <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6109dccccb4bbae97f5ded035b3853d9.svg" style={{}}></img>Tìm khách sạn</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Search;