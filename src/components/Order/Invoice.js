/* eslint-disable prettier/prettier */
import React , { useState, useEffect }from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Transactions = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [invoice,setInvoice] = useState([]);
    useEffect(() =>{
    axios.get(ROOT_URL+'/api/auth/get_onlinepayment')
    .then(invoicepayment=> setInvoice(invoicepayment.data.data))
    .catch(err => console.log(err))
   
}, []);
// const formattedDate = new Date(invoice.createdAt).toLocaleDateString();

  return (
    <>
      <div className='fw-bold'>
        <h3>All Transactions:-</h3></div>
      <CTable responsive="sm" color="dark" className='mt-2'>
        <CTableHead align="middle">
          <CTableRow  >
            <CTableHeaderCell scope="col" className='col-3' >Student name</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2'> Order Date</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>Amount</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-4'>Course name</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody align="middle" >
        {
          invoice.map((invoice) => {
            return <CTableRow active align="middle" key={invoice._id}>
            <CTableDataCell className='col-3 '>{invoice.fullname}</CTableDataCell>
            <CTableDataCell className='col-2'>{invoice.createdAt}</CTableDataCell>
            <CTableDataCell className='col-1'>{invoice.amount}</CTableDataCell>
            <CTableDataCell className='col-4'>{invoice.courses}</CTableDataCell>
            <CTableDataCell className='col-1'><div className='d-flex justify-content-center'>
                
                <Link to={`/invoicelist/${invoice._id}`}><i className="fa fa-eye editicon ms-4"></i></Link>

              </div></CTableDataCell>
          </CTableRow>
          })
        }
          
          

        </CTableBody>
      </CTable>
    </>
  )
}

export default Transactions;
