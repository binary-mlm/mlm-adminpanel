import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Addproduct = React.lazy(() => import('./views/Addproduct'))
const Addsection = React.lazy(() => import('./views/Addsection'))
const Addchapter = React.lazy(() => import('./views/Addchapter'))
const Addblog = React.lazy(() => import('./components/Blogs/Addblog'))
const Allblog = React.lazy(() => import('./components/Blogs/Allblog'))
const Editblog = React.lazy(() => import('./components/Blogs/Editblog'))
const Userlist = React.lazy(() => import('./components/Userlist'))
const Viewuserlist = React.lazy(() => import('./components/Viewuserlist'))
const Alluserlist = React.lazy(() => import('./components/Teacher/Alluser'))
const Viewcourse = React.lazy(() => import('./components/Editcourse'))
const Order = React.lazy(() => import('./components/Order/Orders'))
const OnlineOrder = React.lazy(() => import('./components/Order/Onlineorder'))
const Invoice = React.lazy(() => import('./components/Order/Invoice'))
const Invoicelist = React.lazy(() => import('./components/Order/Invoicelist'))
const Adduser = React.lazy(() => import('./components/Adduser'))
const Offlineuser = React.lazy(() => import('./components/Offlineusers'))
const Addteacher = React.lazy(() => import('./components/Teacher/Addteacher'));
const Viewreview = React.lazy(() => import('./components/Reviews/Viewreview'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
const Contactus = React.lazy(() => import('./views/Contactus'))

const Widgets = React.lazy(() => import('./views/widgets/WidgetsDropdown'))
const Allreview = React.lazy(() => import('./components/Reviews/Allreview'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/addproduct', name: 'Add Course', element: Addproduct },
  { path: '/addsection', name: 'Addsection', element: Addsection },
  { path: '/addchapter', name: 'Addchapter', element: Addchapter },
  { path: '/addteacher', name: 'Addteacher', element: Addteacher },
  { path: '/teacher/alluser', name: 'Alluser', element: Alluserlist },
  { path: '/allreview', name: 'Allreview', element: Allreview},
  { path: '/viewreview/:id', name: 'Viewreview', element: Viewreview},
  { path: '/addblog', name: 'Addblog', element: Addblog },
  { path: '/allblog', name: 'Allblog', element: Allblog },
  { path: '/editblog/:id', name: 'Editblog', element: Editblog },
  { path: '/userlist', name: 'Userlist', element: Userlist },
  { path: '/editcourse/:id', name: 'Editcourse', element: Viewcourse },
  { path: '/viewuserlist', name: 'Viewuserlist', element: Viewuserlist },
  { path: '/onlineorder', name: 'onlineorder', element: OnlineOrder },
  { path: '/order', name: 'order', element: Order },
  { path: '/invoice', name: 'invoice', element: Invoice },
  { path: '/invoicelist/:id', name: 'invoicelist', element: Invoicelist },
  { path: '/adduser', name: 'Adduser', element: Adduser },
  { path: '/Offlineuser', name: 'Offlineuser', element: Offlineuser },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/contactus', name: 'Theme', element: Contactus},
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  
  { path: '/widgets', name: 'Widgets', element: Widgets },
]
export default routes
