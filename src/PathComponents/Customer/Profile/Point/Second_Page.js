import React from "react";
import img from "./second_page.png"
import "./Page.css"
const SecondPage = () => {
    return (
        <div className="second-page">
            <div className="card">
                <div className="page-footer">
                    <p className="text-color-second"><img src={img} className="img-style" />Điểm đang chờ sẽ được kích hoạt 7 ngày sau khi bạn hoàn thành chuyến đi.</p>
                    <hr />
                    <center>
                        <p className="padding-text">
                            Seems like you don't have any Points yet.<br />
                            Book flight or hotel to earn Points now!
                        </p>
                        <div className="page-info">
                            <div className="page-body">
                                <div className="page-row">
                                    <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                        <div>Tên khách hàng:</div>
                                    </div>
                                    <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                        <div>Tình trạng điểm thưởng:</div>
                                    </div>
                                </div>
                                <div className="page-point" style={{ fontWeight: "bolder" }}>
                                    <div>Dịch vụ:</div>
                                </div>
                                <div className="page-row">
                                    <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                        <div>Số điểm thưởng:</div>
                                    </div>
                                    <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                        <div>Ngày nhận điểm thưởng:</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}
export default SecondPage

