// /* eslint-disable prettier/prettier */
// import React , { useState, useEffect }from 'react'
// import {
//     CTable,
//     CTableBody,
//     CTableDataCell,
//     CTableHead,
//     CTableHeaderCell,
//     CTableRow,
// } from '@coreui/react'
// import axios from 'axios';

// const Orders = () => {
//     const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
//     const [payment,setpayment] = useState([]);
//       useEffect(() =>{
//       axios.get(ROOT_URL+'/api/auth/getpayment')
//       .then(payment => setpayment(payment.data.data))
//       .catch(err => console.log(err))
     
//   }, []);
//   return (
//     <>
//     <div className='fw-bold'>
//     <h3>All Orders:-</h3></div>

//     <CTable color="dark" className='mt-2' responsive="sm">
//                 <CTableHead align="middle">
//                     <CTableRow  >
//                         <CTableHeaderCell scope="col" className='col-2' >Razorpay_order_id</CTableHeaderCell>
//                         <CTableHeaderCell scope="col" className='col-2'>Student_name</CTableHeaderCell>
//                         <CTableHeaderCell scope="col" className='col-1'>phoneno</CTableHeaderCell>
//                         <CTableHeaderCell scope="col" className='col-4'>Course name</CTableHeaderCell>
//                         <CTableHeaderCell scope="col" className='col-1'>amount</CTableHeaderCell>
//                         <CTableHeaderCell scope="col" className='col-2'>razorpay_payment_id</CTableHeaderCell>
//                     </CTableRow>
//                 </CTableHead>
//                 <CTableBody align="middle" >
//                 {
//                     payment.map((order) => {
//                     return <CTableRow active align="middle" key={order._id} className='' >
//                         <CTableDataCell className='col-2 '>{order.razorpay_order_id}</CTableDataCell>
//                         <CTableDataCell scope="col" className='col-2'>{order.fullname}</CTableDataCell>
//                         <CTableDataCell scope="col" className='col-1'>{order.phoneno}</CTableDataCell>
//                         <CTableDataCell scope="col" className='col-4'>{order.course}</CTableDataCell>
//                         <CTableDataCell scope="col" className='col-1'>{order.amount}</CTableDataCell>
//                         <CTableDataCell scope="col" className='col-2'>{order.razorpay_payment_id}</CTableDataCell>
                     
//                     </CTableRow>
                    
//                     })
//                 }
                    
//                 </CTableBody>
//             </CTable>

//     </>
   
//   )
// }
// export default Orders;