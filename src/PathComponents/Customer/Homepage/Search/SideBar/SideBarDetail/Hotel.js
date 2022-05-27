import React, { useState } from "react";

function Hotel() {
  const [date, setDate] = useState();
  const [openOptionsK, setOpenOptionsK] = useState(false);
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
    <div class="sideBarDetai-s-main-hotel">
      <div class="sideBarDetai-s-1-hotel">
        <p style={{ color: "#0194F3", fontSize: "17px" }}>
          <b>
            <img
              src={require("../Imgsearch/search_hotel.png")}
              style={{ width: "28px", height: "28px" }}
            />
            Khách sạn xem gần đây
          </b>
        </p>
      </div>
      <div class="sideBarDetai-s-2-hotel">
        <div class="form-group">
          <label for="exampleFormControlSelect1">
            <b>Thành phố, địa điểm hoặc tên khách sạn</b>
          </label>
          <select class="form-control" id="exampleFormControlSelect2">
            <option>Đà Nẵng</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="sideBarDetai-s-3-hotel">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
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
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  <b>Số đêm</b>
                </label>
                <select class="form-control" id="exampleFormControlSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  <b>Trả phòng</b>
                </label>
                {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
                <div>
                  <input
                    class="form-control"
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sideBarDetai-s-4-hotel">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <label
                for="exampleFormControlSelect1"
                style={{ marginLeft: "0%" }}
              >
                <b>Số lượng khách</b>
              </label>

              {/* ------------ */}
              <div className="headerSearchItemhotel">
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                  class=" form-group form-control"
                >{`${options.adult} Người lớn, ${options.children} Trẻ em, ${options.baby} Em bé`}</span>
                {openOptions && (
                  <div className="optionshotel">
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
                          disabled={options.baby <= 0}
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
              <button
                type="button"
                class="btn btn-primary"
                style={{
                  backgroundColor: "coral",
                  textAlign: "right",
                  height: "40px",
                  marginLeft: "35.5%",
                  marginTop: "5.5%",
                  paddingBottom: "8%",
                }}
              >
                <p style={{ paddingTop: "3%" }}>
                  <img
                    src={require("../Imgsearch/search.png")}
                    style={{ width: "26px", height: "26px" }}
                  />
                  Tìm khách sạn
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="sideBarDetai-s-5-hotel">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          &nbsp;&nbsp;
          <label class="form-check-label" for="inlineFormCheck">
            <p>
              <b>Tôi đi công tác</b>
            </p>
          </label>
          &nbsp;&nbsp;
          <img
            src={require("../Imgsearch/question.png")}
            style={{ width: "26px", height: "26px" }}
          />
        </div>
      </div>
      <div class="sideBarDetai-s-6-hotel">
        <p style={{ color: "#0194F3", fontSize: "17px" }}>
          <b>
            <img
              src={require("../Imgsearch/pay_hotel.png")}
              style={{ width: "30px", height: "30px" }}
            />
            Thanh toán khi nhận phòng
          </b>
        </p>
      </div>
    </div>
  );
}

export default Hotel;
