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
    title: 'AddMovie',
    path: '/AddMovie',
    icon: <IoIcons.IoIosAddCircle />
  },
  {
    title: 'UserQuerys',
    path: '/UserQuerys',
    icon: <IcIcons.FcFaq />
  },
  {
    title: 'AddCast',
    path: '/AddCast',
    icon: <IoIcons.IoIosAddCircle />
  },
  {
    title: 'RemoveMovie',
    path: '/RemoveMovie',
    icon: <IoIcons.IoMdRemoveCircle />
  }
  
];
