import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Addproduct = React.lazy(() => import('./views/Addproduct'))
// const Userlist = React.lazy(() => import('./components/Userlist'))

const Order = React.lazy(() => import('./components/Order/Orders'))
const OnlineOrder = React.lazy(() => import('./components/Order/Onlineorder'))
const Invoice = React.lazy(() => import('./components/Order/Invoice'))
const Invoicelist = React.lazy(() => import('./components/Order/Invoicelist'))
const Offlineuser = React.lazy(() => import('./components/Offlineusers'))

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
const Contactus = React.lazy(() => import('./views/Contactus'))
const Addfanchise = React.lazy(() => import("./components/Franchise/Addfanchise"))
const Viewfanchise  =  React.lazy(() => import("./components/Franchise/Viewfanchise"))
const Widgets = React.lazy(() => import('./views/widgets/WidgetsDropdown'))


const Addproductfanchise = React.lazy(() => import('./components/Franchise/Addproductfanchise'))
const Inventorfranchise = React.lazy(() => import('./components/Franchise/Inventorfranchise'))
// kyc
const GetUserkycdetails = React.lazy(() => import('./components/KYC/GetUserkycdetails'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/addproduct', name: 'Add Course', element: Addproduct },
  { path: '/addfanchise', name: 'Add Course', element: Addfanchise },
  { path: '/viewfanchise', name: 'Add Course', element: Viewfanchise },
  { path: '/addproductfanchise', name: 'Add Course', element: Addproductfanchise },
  { path: '/inventoryfranchise', name: 'Add Course', element: Inventorfranchise },
  { path: '/getUserkycdetails', name: 'GetUserkycdetails', element: GetUserkycdetails },

  { path: '/onlineorder', name: 'onlineorder', element: OnlineOrder },
  { path: '/order', name: 'order', element: Order },
  { path: '/invoice', name: 'invoice', element: Invoice },
  { path: '/invoicelist/:id', name: 'invoicelist', element: Invoicelist },
 
  { path: '/Offlineuser', name: 'Offlineuser', element: Offlineuser },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/contactus', name: 'Theme', element: Contactus},
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  
  { path: '/widgets', name: 'Widgets', element: Widgets },
]
export default routes
