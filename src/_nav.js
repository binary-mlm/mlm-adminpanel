import React from 'react'
import CIcon from '@coreui/icons-react'
import {
 
  cilNotes,
  cilPencil,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Product',
  },
  {
    component: CNavItem,
    name: 'Add Product',
    to: '/Addproduct',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Products',
    to: '/allproduct',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'User',
  },
  // {
  //   component: CNavItem,
  //   name: 'Add Product',
  //   to: '/user/addproduct',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'User Inventory',
  //   to: '/user/userInventory',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'All users',
    to: '/user/allusers',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'activeuser',
  //   to: '/user/activeuser',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'KYC',
  },
  {
    component: CNavItem,
    name: 'Pending User KYC ',
    to: '/getUserkycdetails',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Approved User KYC ',
    to: '/getaproveduser',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Rejected User KYC ',
    to: '/getrejectuser',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  
  
  {
    component: CNavTitle,
    name: 'Pick-up point',
  },
  {
    component: CNavItem,
    name: 'Add pick-up point',
    to: '/addfanchise',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'View pick-up point',
    to: '/viewfanchise',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add product',
    to: '/addproductfanchise',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pick-up point inventory',
    to: '/inventoryfranchise',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Payout',
  },
  {

    component: CNavItem,
    name: 'Weekly Payout',
    to: '/payout',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Monthly Payout',
    to: '/monthlypayout',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Rank Achiver',
  },
  {
    component: CNavItem,
    name: 'RankAchievers',
    to: '/rankachievers',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  

 
  // {
  //   component: CNavTitle,
  //   name: 'Teacher',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Add Teacher',
  //   to: '/Addteacher',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'User review',
  // },
  // {
  //   component: CNavItem,
  //   name: 'User reviews',
  //   to: '/allreview',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Contact Form',
  // },
  // {
  //   component: CNavItem,
  //   name: 'All User',
  //   to: '/contactus',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Blog',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Addblog',
  //   to: '/Addblog',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Allblog',
  //   to: '/Allblog',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'User',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Userlist',
  //   to: '/userlist',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Offlineuser',
  //   to: '/Offlineuser',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },

  // {
  //   component: CNavItem,
  //   name: ' Online Orders',
  //   to: '/onlineorder',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Order',
  // },
  // {
  //   component: CNavItem,
  //   name: ' Offline Orders',
  //   to: '/order',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: ' Online Orders',
  //   to: '/onlineorder',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Invoice',
  //   to: '/invoice',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },

  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
