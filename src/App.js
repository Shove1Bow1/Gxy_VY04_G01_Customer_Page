import React from "react";
import PartnerPage from "./PathComponents/Partner/PartnerRouteController";
import CustomerPage from "./PathComponents/Customer/CustomerRouteController";
// import Card from "./PathComponents/Customer/CreditCard/CreditCardManager"
import {BrowserRouter as Router,Routes,Route,useParams} from 'react-router-dom';
export default function App(){
    return (
      <Router>
        <Routes>
           <Route path='/*' element={<CustomerPage/>}></Route>
           <Route path='/Partner/*' element={<PartnerPage/>}></Route>
        </Routes>
      </Router>
     
    )
}