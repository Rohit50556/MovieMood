import React from 'react';
import { Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AdminHome from '../../admin/src/AdminComponent/AdminHome';
import AddMovie from '../../admin/src/AdminComponent/AddMovie';
import RemoveMovie from '../../admin/src/AdminComponent/RemoveMovie';
import UserQuerys from '../../admin/src/AdminComponent/UserQuerys';
import AdminNavbar from '../../admin/src/AdminComponent/AdminNavbar';
import Details from '../../admin/src/AdminComponent/Details';
import AddCast from '../../admin/src/AdminComponent/AddCast';
import './css/Admin.css';

const Admin = () =>{
 return(<>
    <AdminNavbar />
    <Route exact path='/' component={AdminHome}/>
    <Route exact path='/AddMovie' component={AddMovie}/>
    <Route exact path='/RemoveMovie' component={RemoveMovie}/>
    <Route exact path='/Details' component={Details}/>
    <Route exact path='/UserQuerys' component={UserQuerys}/>
   <Route exact path='/AddCast' component={AddCast}/>
 </>
 );
}

 

export default Admin;