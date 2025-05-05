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
  const [totalTulsi, setTotalTulsi] = useState(0);
  const [totalCurcumin, setTotalCurcumin] = useState(0);
  const [totalkamasakti, setKamasakti] = useState(0);
  const [totalbooster, setBooster] = useState(0);
  const [totalapplesoap, setApplesoap] = useState(0);
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
        const response = await axios.post(ROOT_URL+`/api/admin/getFranchiseOrders`,{franchiseId}); // Adjust this endpoint to match your API
        if (response.data.length === 0) {
            swal('Opps!', 'No inventory found for this franchise!', 'error')
        } else {
          const sortedOrders = response.data.orders.sort((a, b) => {
            return new Date(b.orderDetails.orderDate) - new Date(a.orderDetails.orderDate);
            
          });
          setInventory(sortedOrders);
          console.log(response.data.orders);
            // Calculate totals for Tulsi and Curcumin+
            let tulsi = 0;
            let curcumin = 0;
            let kamasakti = 0;
            let booster = 0;
            let applesoap = 0;
  
            sortedOrders.forEach(order => {
              order.products.forEach(product => {
                if (product.name.includes('Udbhab Panch Tulsi')) {
                  tulsi += product.quantity;
                }
                if (product.name.includes('Udbhab Curcumin +')) {
                  curcumin += product.quantity;
                }
                if (product.name.includes('Udbhab Kama Shakti')) {
                  kamasakti += product.quantity;
                }
                if(product.name.includes('Udbhab Immune Booster +')) {
                  booster += product.quantity;
                 
                }
                if(product.name.includes('Udbhab Aloe Green Apple Soap')){
                  applesoap += product.quantity;
                }
              });
            });
  
            setTotalTulsi(tulsi);
            setTotalCurcumin(curcumin);
            setKamasakti(kamasakti);
            setBooster(booster);
            setApplesoap(applesoap);
        }
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    } else {
      setInventory([]);
      setTotalTulsi(0);
      setTotalCurcumin(0);
    }
  };
 
  const handleInvoice = (order) => {
    navigate('/franchiseinvoice', { state: { franchiseId: selectedFranchise, order } });
  };

  return (
    <div>
    <div className='row'>
    <div className='col-4'>
    <h5>Total <strong>Panch Tulsi</strong> :- {totalTulsi}</h5>
    </div>
    <div className='col-4'>
    <h5 className='ms-3'>Total <strong>Curcumin+</strong>: {totalCurcumin}</h5>
    </div>
    <div className='col-4'>
    <h5 className='ms-3'>Total  Kama Shakti: {totalkamasakti}</h5>
    </div>
    </div>
    <div className='row mt-2'>
    <div className='col-4'>
    <h5>Total Immune Booster+ : {totalbooster}</h5>
    </div>
    <div className='col-4'>
    <h5 className='ms-3'>Total Aloe Green Apple Soap: {totalapplesoap}</h5>

    </div>

    </div>
      <h1 className='mt-5'>Franchise Inventory</h1>

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
        <div>
        <CTable>
          <CTableHead>
            <CTableRow>
              {/* <CTableHeaderCell>Product ID</CTableHeaderCell> */}
              <CTableDataCell>S/N</CTableDataCell>
              <CTableHeaderCell className='text-center'>Order Number</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Order Amount</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Order date </CTableHeaderCell>
              {/* <CTableHeaderCell className='text-center'>BV Points</CTableHeaderCell> */}
              <CTableHeaderCell className='text-center'>Invoice</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {inventory.map((order,index) => (
              <CTableRow key={order._id}>
               <CTableDataCell>{index+1}.</CTableDataCell>
                <CTableDataCell className='text-center'>{order.orderDetails.orderNumber}</CTableDataCell>
                <CTableDataCell className='text-center'>{order.orderDetails.totalAmount}</CTableDataCell>
                <CTableDataCell className='text-center'>{new Date(order.orderDetails.orderDate).toLocaleDateString()}</CTableDataCell>
                <CTableDataCell className='text-center'><span><i className="fa fa-eye"  onClick={() => handleInvoice(order)}  style={{ fontSize: "20px", color:"white" }} ></i> </span></CTableDataCell>
               
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        <div className="text-end mt-3">
      <h4>Total Order Amount: <strong>₹{inventory.reduce((sum , order) => sum + order.orderDetails.totalAmount, 0)}</strong></h4>
      </div>
        </div>
      )}
      
    </div>
  )
}

export default Inventorfranchise