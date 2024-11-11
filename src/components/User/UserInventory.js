import React, { useState } from 'react'
import axios from 'axios';
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CFormLabel,
  CFormInput,
  CButton
  
} from '@coreui/react'
const UserInventory = () => {
  const ROOT_URL =  import.meta.env.VITE_LOCALHOST_URL
  const [sponsorId,setSponsorId] = useState('');
  const [inventory,setInventory] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    if(sponsorId){
      try {
        const response = await axios.post(ROOT_URL+`/api/user/myOrders`,{sponsorId}); // Adjust this endpoint to match your API
        
        setInventory(response.data.myOrders);
        console.log(response.data.myOrders);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    } else {
      setInventory([]);
    
    }
  }
  return (
   <>
       <div className="d-flex align-items-center justify-content-center">
          <CFormLabel className="mb-0 me-2" htmlFor="searchFranchise">
            Enter Sponsor ID:
          </CFormLabel>
          <CFormInput
            className="me-2 w-25"
            id="searchFranchise"
            onChange={(e) => setSponsorId(e.target.value)}
            placeholder=" Enter User sponsor ID..."
          />
          <CButton className='btn btn-success text-white' onClick={e => handleSearch(e)}>Enter</CButton>
        </div>
        {inventory.length > 0 && (
        <CTable className='mt-5'>
          <CTableHead>
            <CTableRow>
              {/* <CTableHeaderCell>Product ID</CTableHeaderCell> */}
              <CTableHeaderCell className='text-center'>Order Number</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Total Amount</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Order date </CTableHeaderCell>
              <CTableHeaderCell className='text-center'>BV Points</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Invoice</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {inventory.map((order) => (
              <CTableRow key={order._id}>
               
                <CTableDataCell className='text-center'>{order.orderDetails.orderNumber}</CTableDataCell>
                <CTableDataCell className='text-center'>{order.orderDetails.totalAmount}</CTableDataCell>
                <CTableDataCell className='text-center'>{new Date(order.orderDetails.orderDate).toLocaleDateString()}</CTableDataCell>
                <CTableDataCell className='text-center'>{order.orderDetails.totalBVPoints}</CTableDataCell>
                <CTableDataCell className='text-center'><span><i className="fa fa-eye"  onClick={() => handleInvoice(order)}  style={{ fontSize: "20px", color:"white" }} ></i> </span></CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      )}
   </>
  )
}

export default UserInventory