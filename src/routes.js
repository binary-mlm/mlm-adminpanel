import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Addproduct = React.lazy(() => import('./views/Addproduct'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
const Widgets = React.lazy(() => import('./views/widgets/WidgetsDropdown'))
const Userinvoice = React.lazy(() => import('./components/User/Userinvoice'))
// const Contactus = React.lazy(() => import('./views/Contactus'))
//fanchise
const Addfanchise = React.lazy(() => import("./components/Franchise/Addfanchise"))
const Viewfanchise  =  React.lazy(() => import("./components/Franchise/Viewfanchise"))
const Addproductfanchise = React.lazy(() => import('./components/Franchise/Addproductfanchise'))
const Inventorfranchise = React.lazy(() => import('./components/Franchise/Inventorfranchise'))
// kyc
const GetUserkycdetails = React.lazy(() => import('./components/KYC/GetUserkycdetails'))
const Getaproveduser = React.lazy(() => import('./components/KYC/Getaproveduser'))
const Getrejectuser = React.lazy(() => import('./components/KYC/Getrejectuser'))
const Franchiseinvoice = React.lazy(() => import('./components/Franchise/Franchiseinvoice'))
//user
const Useraddproduct = React.lazy(() => import('./components/User/Useraddproduct'))
const UserInventory = React.lazy(() => import('./components/User/UserInventory'))
const Payout = React.lazy(() => import('./components/Payout/Payout'))
const Monthlypayout = React.lazy(() => import ('./components/Payout/Monthlypayout'))
const Editproduct = React.lazy(() => import('./components/Editproduct'))
const Allusers = React.lazy(() => import('./components/User/Allusers'));
const Edituser = React.lazy(() => import('./components/User/Edituser'));
//rank achived
const RankAchievers = React.lazy(() => import("./components/RankAchived/Rankachived"));
const Userachieved = React.lazy(() => import("./components/RankAchived/Userachieved"));
//All products
const Allproduct = React.lazy(() => import("./components/Allproduct/Allproduct"));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/allproduct', name: 'Allproduct', element: Allproduct },
 
  { path: '/addproduct', name: 'Addproduct', element: Addproduct },
  { path: '/addfanchise', name: 'Addfanchise', element: Addfanchise },
  { path: '/viewfanchise', name: 'Viewfanchise', element: Viewfanchise },
  { path: '/editproduct/:id', name: 'Editproduct', element: Editproduct },
  { path: '/addproductfanchise', name: 'Addproductfanchise', element: Addproductfanchise },
  { path: '/franchiseinvoice', name: 'Franchiseinvoice', element: Franchiseinvoice },
  { path: '/inventoryfranchise', name: 'Inventorfranchise', element: Inventorfranchise },
  { path: '/getUserkycdetails', name: 'GetUserkycdetails', element: GetUserkycdetails },
  { path: '/payout', name: 'Payout', element: Payout },
  { path: '/monthlypayout', name: 'Monthlypayout', element: Monthlypayout },
  { path: '/getaproveduser', name: 'Getaproveduser', element: Getaproveduser },
  { path: '/getrejectuser', name: 'Getrejectuser', element: Getrejectuser },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/user/addproduct', name: 'Useraddproduct', element: Useraddproduct },
  { path: '/user/userInventory', name: 'UserInventory', element: UserInventory },
  { path: '/user/userinvoice', name: 'Userinvoice', element: Userinvoice },
  { path: '/user/allusers', name: 'Allusers', element: Allusers },
  { path: '/user/edituser/:id', name: 'Edituser', element: Edituser },
  { path: '/rankachievers', name: 'RankAchievers', element: RankAchievers },
  { path: '/userachieved', name: 'Userachieved', element: Userachieved },

]
export default routes
