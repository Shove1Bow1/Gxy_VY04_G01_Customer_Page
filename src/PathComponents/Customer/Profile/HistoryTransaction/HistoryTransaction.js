import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Navigate } from 'react-router-dom';
export default function HistoryTransaction(props){
    const navigate=useNavigate();
    const [getData,setData]=useState([]);
    const [getPackage,setPackage]=useState([]);
    const [getCookies,setCookies]=useCookies();
    useEffect(async ()=>{
        if(!getPackage[0]){
            const res = await axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/getHistoryTransaction",{
                TOKEN: props.value,
            });
            setPackage(res.data.RESULT);
        }
        if (!getData[1]) {
            const data=[];
            for (var i = 0; i < getPackage.length; i++) {
                var TRANSACTION_TYPE = "Trừ";
                if (getPackage[i].TRANSACTION_TYPE) 
                {
                    TRANSACTION_TYPE = "Cộng";
                }
                const DATE_ACTIVE=HandleDate(getPackage[i].DATE_TRANSACTION)
                const unmountToData = {
                    id: i+1,
                    SERVICE_NAME: getPackage[i].APP_ID,
                    TRANSACTION_DATE: DATE_ACTIVE,
                    TRANSACTION_VALUE: getPackage[i].TRANSACTION_VALUE,
                    TRANSACTION_TYPE: TRANSACTION_TYPE,
                    TRANSACTION_INFO: getPackage[i].TRANSACTION_INFO,
                }
                if(i===0){
                    data[0]=unmountToData;
                }
                else
                    data.push(unmountToData);
            }
            setData(data);
        }
    });
    const columns = [
        {
            name: 'Tên dịch vụ',
            selector: row => row.SERVICE_NAME,
            sortable: true,
        },
        {
            name: 'Ngày giao dịch',
            selector: row => row.TRANSACTION_DATE,
            sortable: true,
        },
        {
            name: 'Giá trị giao dịch',
            selector: row => row.TRANSACTION_VALUE,
            sortable: true,
        },
        {
            name: 'Loại giao dịch',
            selector: row => row.TRANSACTION_TYPE,
            sortable: true,
        },
        {
            name: 'Nội dung giao dịch',
            selector: row => row.TRANSACTION_INFO,
            sortable: true,
        },
    ];
    function HandleDate(ACTIVATED_DATE){
        const Year=ACTIVATED_DATE[0]+ACTIVATED_DATE[1]+ACTIVATED_DATE[2]+ACTIVATED_DATE[3];
        const Month=ACTIVATED_DATE[5]+ACTIVATED_DATE[6];
        const Day=ACTIVATED_DATE[8]+ACTIVATED_DATE[9];
        return Day+"-"+Month+"-"+Year;
    }
    return(
        <div style={{height:"800px",width:"50%",marginLeft:"38%"}}>
            <DataTable
                columns={columns}
                data={getData}
                pagination
            />
        </div>
    )
}