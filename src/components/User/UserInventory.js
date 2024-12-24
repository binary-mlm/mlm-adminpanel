import React, { useState, useEffect } from 'react'
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
  
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
const UserInventory = () => {
  const ROOT_URL =  import.meta.env.VITE_LOCALHOST_URL;
  const navigate = useNavigate();
  // const [sponsorId,setSponsorId] = useState('');
  const [inventory,setInventory] = useState([]);
 
    useEffect(()  => {
      const fetchProducts = async () => {
      try {
        const response = await axios.get(ROOT_URL+`/api/admin/createdOrdersForUser`); // Adjust this endpoint to match your API
        
        setInventory(response.data.orders);
        console.log(response.data.orders);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    }
    fetchProducts();
  }, []);

  const handleInvoice = (order) => {
    // alert('Invoice');
    navigate('/user/userinvoice', { state: { order } });
  }; 
    // } else {
    //   setInventory([]);
    
    // }
  
  return (
   <>
       {/* <div className="d-flex align-items-center justify-content-center">
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
        </div> */}
        {inventory.length > 0 ? (
        <CTable className='mt-5'>
          <CTableHead>
            <CTableRow>
              {/* <CTableHeaderCell>Product ID</CTableHeaderCell> */}
              <CTableHeaderCell className='text-center'>Order Number</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Order date(MM/DD/YYYY) </CTableHeaderCell>
              <CTableHeaderCell className='text-center'>User Name</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Total Amount</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>BV Points</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Delivery Mode</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Invoice</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {inventory.map((order) => (
              <CTableRow key={order._id}>
                <CTableDataCell className='text-center'>{order.orderDetails.orderNumber}</CTableDataCell>
                <CTableDataCell className='text-center'>{new Date(order.orderDetails.orderDate).toLocaleDateString()}</CTableDataCell>
                <CTableDataCell className='text-center'>{order.userDetails.userName}</CTableDataCell>
                <CTableDataCell className='text-center'>{order.orderDetails.totalAmount}</CTableDataCell>
                <CTableDataCell className='text-center'>{order.orderDetails.totalBVPoints}</CTableDataCell>
                <CTableDataCell className='text-center'>{order.deliveryMode}</CTableDataCell>
                <CTableDataCell className='text-center'><span><i className="fa fa-eye"  onClick={() => handleInvoice(order)}  style={{ fontSize: "20px", color:"white" }} ></i> </span></CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      ) : (
        <div className="mt-5 text-center">
          <h5>No orders found</h5>
        </div>
      )}
   </>
  )
}

export default UserInventory