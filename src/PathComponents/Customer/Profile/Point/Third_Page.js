import axios from "axios";
import React, { useEffect } from "react";



const ThirdPage = (props) =>{
    const [getCookies]=useCookies();
    const [getPackage,setPackage]=useState([]);
    useEffect(()=>{
        axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/getHistoryPoint",{
            TOKEN:props.value,
        }).then(res=>{
            console.log(res);
            setPackage(res.data.PACKAGE)
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
    function TypeHistoryPoint(TYPE_HISTORY_POINT){
        if(TYPE_HISTORY_POINT){
            return "Cộng vào tài khoản";
        }
        return "Mua Gift Voucher"
    }
    function HandleDate(ACTIVATED_DATE){
        const Year=ACTIVATED_DATE[0]+ACTIVATED_DATE[1]+ACTIVATED_DATE[2]+ACTIVATED_DATE[3];
        const Month=ACTIVATED_DATE[5]+ACTIVATED_DATE[6];
        const Day=ACTIVATED_DATE[8]+ACTIVATED_DATE[9];
        return Day+"-"+Month+"-"+Year;
    }
    return(
        <div>
            <center>  
                {
                    !getPackage[0] ?
                        <p className="padding-text">
                            Seems like you don't have any Points yet.<br />
                            Book flight or hotel to earn Points now!
                        </p>:
                         getPackage.map((item) => {
                            return (
                                <div className="page-info" key={item.TRANSACTION_ID}>
                                    <div className="page-body">
                                        <div className="page-row">
                                            <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                                <div>Tình trạng điểm thưởng: {" "+TypeHistoryPoint(item.TYPE_HISTORY_POINT)}</div>   
                                                <div className="page-point" style={{ fontWeight: "bolder" }}>
                                                <div>Dịch vụ: {" "+HandleServiceName(item.APP_ID)}</div>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div className="page-row">
                                            <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                                <div>Số điểm thưởng:{" "+item.POINT_VALUE}</div>
                                            </div>
                                            <div className="col-sm-6" style={{ fontWeight: "bolder" }}>
                                                <div>Ngày thực hiện giao dịch:{" "+HandleDate(item.ACTIVATED_DATE)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </center>

        </div>
    )
}
export default ThirdPage

