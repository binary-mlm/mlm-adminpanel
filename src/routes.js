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

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
// Buttons

const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/WidgetsDropdown'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/addproduct', name: 'Add Course', element: Addproduct },
  { path: '/addsection', name: 'Addsection', element: Addsection },
  { path: '/addchapter', name: 'Addchapter', element: Addchapter },
  { path: '/addteacher', name: 'Addteacher', element: Addteacher },
  { path: '/teacher/alluser', name: 'Alluser', element: Alluserlist },

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
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },

  
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
