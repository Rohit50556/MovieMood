import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link,useHistory} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { SidebarData } from './SidebarData';
import '../css/AdminNavbar.css';
import { IconContext } from 'react-icons';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//import { GiTicket } from "react-icons/gi";
function AdminNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  var login=false
  let history =useHistory();
  var token=localStorage.getItem("token")

  if(token!=null)
  {
    login=true 
  }

    function redirectPage(){
        localStorage.clear();
       history.push('/Login')

}

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' style={{position:'fixed', width:'100%'}}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div style={{marginLeft:'600px',position:'fixed'}}>
          <a href="/"  style={{textDecoration:'none',color:"white"}}><h1>Theater Manager</h1></a>
          </div>
          {login?<Button  variant="danger" onClick={redirectPage}>LogOut</Button>:(<><Link style={{color:'white',textDecoration:'none'}} to="/Login"><AccountCircleIcon />Login/Register</Link></>)}

        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{marginLeft:'150px'}}/>
              </Link>
              
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index}  className='nav-text'>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  </li>
              );

          })}
               
          
          </ul>
        </nav>
      </IconContext.Provider>

    </>
  );
}

export default AdminNavbar;
