import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CFormSelect,
    CFormLabel
} from '@coreui/react'
const Inventorfranchise = () => {
    const [franchises, setFranchises] = useState([]);
  const [selectedFranchise, setSelectedFranchise] = useState('');
  const [inventory, setInventory] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL
  const navigate = useNavigate()
  // Fetch franchises on component mount
  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        const response = await axios.get(ROOT_URL+'/api/admin/getAllFranchies'); // Adjust this endpoint to match your API
        setFranchises(response.data);
      } catch (error) {
        console.error('Error fetching franchises:', error);
      }
    };

    fetchFranchises();
  }, []);

  const handleFranchiseChange = async (e) => {
    const franchiseId = e.target.value;

    setSelectedFranchise(franchiseId);
    console.log(selectedFranchise)
    
    if (franchiseId) {
      try {
        const response = await axios.get(ROOT_URL+`/api/admin/franchise/${franchiseId}/assigned-products`); // Adjust this endpoint to match your API
        if (response.data.length === 0) {
            swal('Opps!', 'No inventory found for this franchise!', 'error')
        } else {
          setInventory(response.data);
         
        }
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    } else {
      setInventory([]);
    }
  };
const handleinvoice =()=>{
  navigate('/franchiseinvoice')
}
  return (
    <div>
      <h1>Franchise Inventory</h1>

      {/* Franchise Dropdown */}
      <div className='mb-4 d-flex justify-content-center'>
      <CFormLabel className="mt-2" htmlFor="franchise">Select Franchise:</CFormLabel>
      <CFormSelect
        id="franchise"
        value={selectedFranchise}
        onChange={handleFranchiseChange}
        className='w-25 ms-2'
      >
        <option value="">-- Select Franchise --</option>
        {franchises.map((franchise) => (
          <option key={franchise._id} value={franchise.franchiseId}>
            {franchise.franchiseName}
          </option>
        ))}
      </CFormSelect>
      </div>

     

      {/* Inventory Table */}
      {inventory.length > 0 && (
        <CTable>
          <CTableHead>
            <CTableRow>
              {/* <CTableHeaderCell>Product ID</CTableHeaderCell> */}
              <CTableHeaderCell className='text-center'>Product Name</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Quantity</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Price</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>BV Points</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Invoice</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {inventory.map((item) => (
              <CTableRow key={item._id}>
               
                <CTableDataCell className='text-center'>{item.productName}</CTableDataCell>
                <CTableDataCell className='text-center'>{item.stock}</CTableDataCell>
                <CTableDataCell className='text-center'>{item.price}</CTableDataCell>
                <CTableDataCell className='text-center'>{item.bvPoints}</CTableDataCell>
                <CTableDataCell className='text-center'><span><i className="fa fa-eye" onClick={handleinvoice} style={{ fontSize: "20px", color:"white" }} ></i> </span></CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      )}
    </div>
  )
}

export default Inventorfranchise