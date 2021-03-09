import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../css/AdminNavbar.css';
import { IconContext } from 'react-icons';
//import { GiTicket } from "react-icons/gi";

function AdminNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' style={{position:'fixed', width:'100%'}} >
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            
          </Link>
          
          <a href='/' style={{position:'fixed',marginLeft:'700px',color:'white',textDecoration:'none  '}}><h1>Admin</h1></a>
          {/* <h1 style={{color:'red',display: 'inline-block',fontSize:'50px'}}>Movie </h1><GiTicket style={{marginTop:'-20px',marginLeft:'10px'}} size="60px" />
          <h1 style={{color:'blue',display: 'inline-block',fontSize:'50px'}}> Mood</h1></a>  */}
        </div>
        <nav  className={sidebar ? 'nav-menu active' : 'nav-menu'}>
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
