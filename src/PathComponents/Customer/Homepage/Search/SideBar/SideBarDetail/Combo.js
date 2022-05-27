import React, { useState } from "react";
import "./SideBarDetailSearch.css";

function Combo() {
  const [date, setDate] = useState();
  const [openOptionsK, setOpenOptionsK] = useState(false);
  const [openOptionsTu, setOpenOptionsTu] = useState(false);
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
    <div className="sideBarDetail-s-main-combo" >
      <div className="sideBarDetail-s-1-combo">
        <p style={{ color: "black", fontSize: "17px" }}>
          <b>
            <img
              src={require("../Imgsearch/combo_save.png")}
              style={{ width: "28px", height: "28px" }}
            />
            &nbsp; Đặt combo để tiết kiệm đến 15%
          </b>
        </p>
      </div>
      <div className="sideBarDetail-s-2-combo">
        <h4>Chi tiết chuyến bay</h4>
        <p></p>
        <div class="row">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-4" style={{ width: "190px" }}>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    <b>Từ</b>
                  </label>
                  {!openOptionsTu&&<select class="form-control" id="exampleFormControlSelect2">
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
                <button className="optionCounterButton"
                        onClick={(e) => setOpenOptionsTu(!openOptionsTu)}>+</button>
              </div>
              <div
                class="col-md-4"
                style={{ width: "190px", marginRight: "1px" }}
              >
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    <b>Đến</b>
                  </label>
                  {!openOptionsTu && <select class="form-control" id="exampleFormControlSelect2">
                    <option>TP HCM</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>}
                  {openOptionsTu&&<select class="form-control" id="exampleFormControlSelect2">
                    <option>Đà Nẵng</option>
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
          <label
              for="exampleFormControlSelect1"
              style={{ marginLeft: "49%" }}
            >
              <b>Số lượng khách</b>
            </label>

            {/* ------------ */}
            <div className="headerSearchItem3">
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
        </div>
        <div className="khuhoi" style={{ marginLeft: "25%" }}>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineFormCheck"
              onClick={() => setOpenOptionsK(!openOptionsK)}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label class="form-check-label" for="inlineFormCheck">
              <p>
                <b>Khứ hồi</b>
              </p>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-6">
                  <div class="col">
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
                <div class="col-lg-6">
                <label></label>

{/* <!--input --> */}
{openOptionsK && (
  <div style={{ border: "none" }}>
    <input
      class="form-control"
      type="date"
      onChange={(e) => setDate(e.target.value)}
      style={{ width: "190px", height: "40px" }}
    />
  </div>
)}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div style={{ marginLeft: "53%" }}>
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
        <hr />
      </div>
      <div className="sideBarDetail-s-3-combo">
        <h4>Chi tiết khách sạn</h4>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group" >
                      <label for="exampleFormControlSelect1">
                        <b>Thành phố, địa điểm hoặc tên khách sạn</b>
                      </label>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect2"
                        style={{ width: "110%" }}
                      >
                        <option value="" disabled selected>Thành phố đến của bạn</option>
                        <option>Đà Nẵng</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">
                        <b>Nhận phòng</b>
                      </label>
                      {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
                      <div style={{ border: "none" }}>
                        <input
                          class="form-control"
                          type="date"
                          onChange={(e) => setDate(e.target.value)}
                          style={{ width: "80%", height: "40px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">
                        <b>Trả phòng</b>
                      </label>
                      {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
                      <div style={{ border: "none" }}>
                        <input
                          class="form-control"
                          type="date"
                          onChange={(e) => setDate(e.target.value)}
                          style={{ width: "140px", height: "38px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="form-group" style={{ marginLeft: "15%" }}>
                      <label for="exampleFormControlSelect1">
                        <b>Hành khách</b>
                      </label>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect2"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group" style={{ marginRight: "23%" }}>
                      <label for="exampleFormControlSelect1">
                        <b>Phòng</b>
                      </label>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect2"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <button
          type="button"
          class="btn btn-primary"
          style={{
            backgroundColor: "coral",
            textAlign: "right",
            height: "45px",
            marginLeft:'70%'
          }}
        >
          <p style={{ paddingTop: "3%" }}>Tìm combo tiết kiệm</p>
        </button>
      </div>
    </div>
  );
}

export default Combo;
