import React, { useState } from "react";

function HireCar() {
  const [date, setDate] = useState();
  console.log("Date", date);
  return (
    <div>
      <div className=" sideBarDetail-s-1-Car">
        <h4>Cho thuê xe</h4>
        <div class="form-group">
          <select
            class="form-control"
            id="exampleFormControlSelect2"
            style={{ width: "25%" }}
          >
            <option>Tự lái</option>
            <option>Có tài xế</option>
          </select>
        </div>
        <br />
        <div class="form-group">
          <label for="exampleFormControlSelect1">
            <b>Địa điểm thuê xe của bạn</b>
          </label>
          <select
            class="form-control"
            id="exampleFormControlSelect2"
            placeholder=""
            style={{ width: "40%" }}
          >
            <option value="" disabled selected>
              Điền thành phố, sân bay, hoặc khách sạn
            </option>
            <option>Đà Nẵng</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <br/>
        {/* -------- */}
        <div className="">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">
                          <b>Ngày bắt đầu</b>
                        </label>
                        {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
                        <div style={{ border: "none" }}>
                          <input
                            class="form-control"
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            style={{ width: "100%", height: "40px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">
                          <b>Giờ bắt đầu</b>
                        </label>
                        {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
                        <div style={{ border: "none" }}>
                          <input
                            class="form-control"
                            type="time"
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
                          <b>Ngày kết thúc</b>
                        </label>
                        {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
                        <div style={{ border: "none" }}>
                          <input
                            class="form-control"
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            style={{ width: "130%", height: "40px" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4">
                    <div class="form-group" style={{ marginLeft:'15%' }}>
                        <label for="exampleFormControlSelect1">
                          <b>Giờ kết thúc</b>
                        </label>
                        {/* datepicker..."gọi ngày đã chọn bằng cách gọi {date}" */}
                        <div style={{ border: "none" }}>
                          <input
                            class="form-control"
                            type="time"
                            onChange={(e) => setDate(e.target.value)}
                            style={{ width: "140%", height: "40px",}}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group"  style={{ marginLeft:'25%' }}>
                        <br />

                        <button
                          type="button"
                          class="btn btn-primary"
                          style={{
                            backgroundColor: "coral",
                            textAlign: "left",
                            height: "38px",
                            marginLeft: "0%",
                            width:"130%"
                          }}
                        >
                          <p style={{ paddingTop: "-3%" }}>
                            <img
                              src={require("../Imgsearch/search.png")}
                              style={{ width: "26px", height: "26px" }}
                            />
                            Tìm xe
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default HireCar;
