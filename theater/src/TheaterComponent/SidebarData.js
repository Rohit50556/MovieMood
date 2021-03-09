import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IcIcons  from "react-icons/fc";
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'TimeTable',
    path: '/TimeTable',
    icon: <IcIcons.FcOvertime/>
   },
  // {
  //   title: 'AddSnacks',
  //   path: '/AddSnacks',
  //   icon: <IoIcons.IoIosAddCircle />
  // },
  {
    title: 'UpdateDetails',
    path: '/UpdateDetails',
    icon: <IoIcons.IoIosPaper />
   }
  // {  
  //    title: 'Login/Register',
  //     path: '/Login',
  //     icon: <AccountCircleIcon />
  // }

];
