import React from 'react';
import { Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import TheaterNavbar from './TheaterComponent/TheaterNavbar';
import TheaterHome from './TheaterComponent/TheaterHome';
import TimeTable from './TheaterComponent/TimeTable';
import AddSnacks from './TheaterComponent/AddSnacks';
import UpdateDetails from './TheaterComponent/UpdateDetails';
import Login from "./Login";
import Register from "./Register";

//import AcceptOrder from './TheaterComponent/AcceptOrder';
import sendMail from './TheaterComponent/sendMail';
import './css/Theater.css';

const Theater = () =>{
console.log("hello min")

 return(<>
    <TheaterNavbar />
    <Route exact path='/' component={TheaterHome}/>
    <Route exact path='/Login' component={Login}/>
    <Route exact path='/Register' component={Register}/>
    <Route exact path='/TimeTable' component={TimeTable}/> 
    <Route exact path='/AddSnacks' component={AddSnacks}/>
    <Route exact path='/UpdateDetails' component={UpdateDetails}/>
    <Route exact path='/sendMail' component={sendMail}/>
    
 </>
 );
}


export default Theater;