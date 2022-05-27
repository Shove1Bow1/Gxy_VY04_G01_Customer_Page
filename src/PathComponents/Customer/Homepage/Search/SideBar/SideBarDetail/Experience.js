import React from "react";

function Experience() {
  return (
    <div>
      <div className="sideBarDetail-s-1-experience">
        <h2>Điểm đến địa phương</h2>
        <p style={{ color: "gray", fontSize: "20px" }}>
          Bạn đã sẵn sàng khám phá những địa điểm tốt nhất cùng chúng tôi?
        </p>
        <img
          src={require("../Imgsearch/Laocai.jpg")}
          style={{ width: "200px", height: "200px", borderRadius: "10px" }}
        />
        <br /> <br /> <br />
        <br />
        <h2>Bạn muốn đi đâu tiếp theo?</h2>
        <p style={{ color: "gray", fontSize: "20px" }}>
          Dọn đường cho những chuyến phiêu lưu hấp dẫn
        </p>
        <img
          src={require("../Imgsearch/Thailand.jpg")}
          style={{ width: "200px", height: "200px", borderRadius: "10px" }}
        />
         <br /> <br /> <br />
        <br />
        <h2>Những hoạt động Xperience tốt nhất</h2>
        <p style={{ color: "gray", fontSize: "20px" }}>
          Những hoạt động phổ biến nhất được đặt bởi các du khách và chuyên gia khám phá
        </p>
        <img
          src={require("../Imgsearch/Vinpearl.jpg")}
          style={{ width: "200px", height: "200px", borderRadius: "10px" }}
        />
        <p><strong>Về VinPearl Safari Phú Quốc</strong></p>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          &nbsp;&nbsp;
          <label class="form-check-label" for="inlineFormCheck">
            <p>
              <b>Ganh Dau Commune</b>
            </p>
          </label>         
        </div>
        <p style={{color:"coral"}}><strong >VND 490.000</strong></p>
      </div>
      
    </div>
  );
}

export default Experience;
