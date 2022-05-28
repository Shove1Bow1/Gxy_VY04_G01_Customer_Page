import React from "react";
import PartnerPage from "./PathComponents/Partner/PartnerRouteController";
import CustomerPage from "./PathComponents/Customer/CustomerRouteController";
import {BrowserRouter as Router,Routes,Route,useParams} from 'react-router-dom';
export default function App(){
    return (
      <Router>
        <Routes>
           <Route path='/*' element={<CustomerPage/>}></Route>
        </Routes>
      </Router>
    )
}