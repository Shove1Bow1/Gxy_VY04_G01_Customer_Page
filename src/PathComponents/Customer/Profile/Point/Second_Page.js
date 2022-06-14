import React,{useState,useEffect} from "react";
import img from "./second_page.png"
import "./Page.css"
import axios from "axios";

const SecondPage = (props) => {
    const [getPackage,setPackage]=useState([]);
    useEffect(()=>{
        console.log(props.value);
        axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/getProcessPoint",{
            TOKEN:props.value,
        }).then(res=>{
            if(res.data.STATUS){
                setPackage(res.data.RESULT);
                console.log(res.data);
            }
        })
    },[])
    function HandleServiceName(APP_ID){
        switch (APP_ID){
            case "FLIGHT":
                return "Mua vé máy bay";
            case "HOTEL":
                return "Thuê Phòng";
            case "APART":
                return "Thuê Căn Hộ/Biệt thự";
            case "AIRPORT":
                return "Đặt xe đưa đón ở Sân Bay";
            case "XPERIENCE":
                return "Mua vé trải nghiệm du lịch";
            case "CARRENTAL":
                return "Thuê xe";
            case "EATS":
                return "Nhà Hàng";
            case "VOUCHER":
                return "Mua voucher";
            case "COMBO":
                return "Mua Combo";
            default:
                return;
        }
    }
    function HandleDate(ACTIVATED_DATE){
        const Year=ACTIVATED_DATE[0]+ACTIVATED_DATE[1]+ACTIVATED_DATE[2]+ACTIVATED_DATE[3];
        const Month=ACTIVATED_DATE[5]+ACTIVATED_DATE[6];
        const Day=ACTIVATED_DATE[8]+ACTIVATED_DATE[9];
        return Day+"-"+Month+"-"+Year;
    }
    return (
        <div className="second-page">
            <div className="card">
                <div className="page-footer">
                    <p className="text-color-second"><img src={img} className="img-style" />Điểm đang chờ sẽ được kích hoạt 7 ngày sau khi bạn hoàn thành chuyến đi.</p>
                    <hr />
                    {
                        !getPackage[0] ?
                            <center>
                                <p className="padding-text">
                                    Seems like you don't have any Points yet.<br />
                                    Book flight or hotel to earn Points now!
                                </p>
                            </center> :
                            getPackage.map((item) => {
                                return (
                                    <div className="page-info" key={item.TRANSACTION_ID}>
                                        <div className="page-body">
                                            <div className="page-row">
                                                <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                                    <div>Tình trạng điểm thưởng: Điểm thưởng vẫn đang được xử lý</div>
                                                </div>
                                                <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                                    <div>Ngày sẽ nhận điểm thưởng: {" "+HandleDate(item.END_DATE)}</div>
                                                </div>
                                            </div>
                                            <div className="page-point" style={{ fontWeight: "bolder" }}>
                                                <div>Dịch vụ: {" "+HandleServiceName(item.APP_ID)}</div>
                                            </div>
                                            <div className="page-row">
                                                <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                                    <div>Số điểm thưởng:{" "+item.POINT_VALUE}</div>
                                                </div>
                                                <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                                    <div>Ngày thực hiện giao dịch:{" "+HandleDate(item.DATE_TRANSACTION)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }  
                </div>
            </div>
        </div>
    )
}
export default SecondPage

