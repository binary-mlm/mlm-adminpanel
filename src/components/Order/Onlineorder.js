import React , { useState, useEffect }from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import axios from 'axios';

const Onlineorder = () => {
  
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [onlinepayment,setonlinepayment] = useState([]);
      useEffect(() =>{
      axios.get(ROOT_URL+'/api/auth/get_onlinepayment')
      .then(payment_online => setonlinepayment(payment_online.data.data))
      .catch(err => console.log(err))
     
  }, []);
  return (
    <>
    <div className='fw-bold'>
    <h3>All Orders:-</h3></div>
    <CTable color="dark" className='mt-2' responsive="sm">
                <CTableHead align="middle">
                    <CTableRow  >
                        <CTableHeaderCell scope="col" className='col-2' >Razorpay_order_id</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-2'>Student_name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-1'>phoneno</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-4'>Course name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-1'>amount</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-2'>razorpay_payment_id</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                {
                    onlinepayment.map((order) => {
                    return <CTableRow active align="middle" key={order._id} >
                        <CTableDataCell className='col-2 '>{order.razorpay_order_id}</CTableDataCell>
                        <CTableDataCell scope="col" className='col-2 text-center'>{order.fullname}</CTableDataCell>
                        <CTableDataCell scope="col" className='col-1'>{order.phoneno}</CTableDataCell>
                        <CTableDataCell scope="col" className='col-4 text-center'>{order.courses}</CTableDataCell>
                        <CTableDataCell scope="col" className='col-1 text-center'>{order.amount}</CTableDataCell>
                        <CTableDataCell scope="col" className='col-2'>{order.razorpay_payment_id}</CTableDataCell>
                    </CTableRow>
                    })
                }
                </CTableBody>
                </CTable>
    </>
  )
}

export default Onlineorder