import React from 'react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
 
  cilPencil,
  cilSpeedometer
} from '@coreui/icons'
 const nav  =[
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/teacher/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
    {
        component: CNavItem,
        name: 'Alluserlist',
        to: '/teacher/alluser',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
 ]
export default nav