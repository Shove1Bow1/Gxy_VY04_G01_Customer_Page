import React, { useState } from "react";
import "./SideBarDetailSearch.css";

function Ticket_two() {
  const [date, setDate] = useState();
  const [openOptionsTu, setOpenOptionsTu] = useState(false);
  const [openOptionsTu2, setOpenOptionsTu2] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    baby: 0,
  });
  console.log("Date", date);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="sideBarDetai-s-2-ticket-two">
      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-4" style={{ width: "190px" }}>
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  <b>Từ</b>
                </label>
                {!openOptionsTu && <select class="form-control" id="exampleFormControlSelect2">
                    <option>Đà Nẵng</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>}
                  {openOptionsTu && <select class="form-control" id="exampleFormControlSelect2">
                    <option>TP HCM</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>}
              </div>
              {/* <!-- Name input --> */}
            </div>
            <div
              class="col-md-1"
              style={{ marginTop: "6%", marginRight: "4%" }}
            >
              <button className="optionCounterButton" onClick={(e)=>setOpenOptionsTu(!openOptionsTu)}>+</button>
            </div>
            <div
              class="col-md-4"
              style={{ width: "190px", marginRight: "1px" }}
            >
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  <b>Đến</b>
                </label>
                {openOptionsTu && <select class="form-control" id="exampleFormControlSelect2">
                    <option>Đà Nẵng</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>}
                  {!openOptionsTu && <select class="form-control" id="exampleFormControlSelect2">
                    <option>TP HCM</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>}
              </div>
              {/* <!-- Name input --> */}
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="col" style={{ marginLeft: "200px", width: "280px" }}>
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                <b>Ngày đi</b>
              </label>
              {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
              <div style={{ border: "none" }}>
                <input
                  class="form-control"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: "190px", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* -------------------- */}
      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-4" style={{ width: "190px" }}>
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  <b>Từ</b>
                </label>
                {!openOptionsTu2 && <select class="form-control" id="exampleFormControlSelect2">
                  <option value="" disabled selected>
                    Origin
                  </option>
                  <option>Đà Nẵng</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>}
                {openOptionsTu2&&<select class="form-control" id="exampleFormControlSelect2">
                  <option value="" disabled selected>
                    Destination
                  </option>
                  <option>TP HCM</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>}
              </div>
              {/* <!-- Name input --> */}
            </div>
            <div
              class="col-md-1"
              style={{ marginTop: "6%", marginRight: "4%" }}
            >
              <button className="optionCounterButton" onClick={(e)=>setOpenOptionsTu2(!openOptionsTu2)}>+</button>
            </div>
            <div
              class="col-md-4"
              style={{ width: "190px", marginRight: "1px" }}
            >
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  <b>Đến</b>
                </label>

                {openOptionsTu2 && <select class="form-control" id="exampleFormControlSelect2">
                  <option value="" disabled selected>
                    Origin
                  </option>
                  <option>Đà Nẵng</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>}
                {!openOptionsTu2&&<select class="form-control" id="exampleFormControlSelect2">
                  <option value="" disabled selected>
                    Destination
                  </option>
                  <option>TP HCM</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>}
              </div>
              {/* <!-- Name input --> */}
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="col" style={{ marginLeft: "200px", width: "280px" }}>
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                <b>Ngày đi</b>
              </label>
              {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
              <div style={{ border: "none" }}>
                <input
                  class="form-control"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: "190px", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p style={{ color: "#0194F3", fontSize: "17px" }}>
        <b>
          <img
            src={require("../Imgsearch/ticket_two.png")}
            style={{
              width: "30px",
              height: "30px",
              marginBottom: "1%",
              marginRight: "0.5%",
            }}
          />
          THÊM CHUYẾN BAY KHÁC
        </b>
      </p>
      <div class="container">
        <div class="row">
          <div class="col-lg-6" >
             <label
              for="exampleFormControlSelect1"
              style={{ marginLeft: "0%" }}
            >
              <b>Số lượng khách</b>
            </label>

            {/* ------------ */}
            <div className="headerSearchItem2">
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
                class=" form-group form-control"
              >{`${options.adult} Người lớn, ${options.children} Trẻ em, ${options.baby} Em bé`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Người lớn</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Trẻ em</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Em bé</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.baby <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("baby", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.baby}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("baby", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
         
          </div>
          <div class="col-lg-6">
            <div style={{ marginLeft: "53%", width: "300px" }}>
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  <b>Hạng ghế</b>
                </label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect2"
                  style={{ width: "280px" }}
                >
                  <option>Phổ thông</option>
                  <option>Phổ thông đặt biệt</option>
                  <option>Thương gia</option>
                  <option>Hạng nhất</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <button
        type="button"
        class="btn btn-primary"
        style={{
          backgroundColor: "coral",
          textAlign: "center",
          height: "45px",
          marginLeft: "75%",
        }}
      >
        <p style={{ paddingTop: "3%" }}>
          <img
            src={require("../Imgsearch/search.png")}
            style={{ width: "26px", height: "26px" }}
          />
          Tìm kiếm chuyến bay
        </p>
      </button>
    </div>
  );
}

export default Ticket_two;
