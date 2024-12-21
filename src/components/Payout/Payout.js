import React , { useState, useEffect } from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CFormLabel,
  CButton
} from '@coreui/react'
import axios from 'axios'
import swal from 'sweetalert';


function Payout() {
  const [weeklypayout, setWeeklypayout] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL
  useEffect(() => {
    const fetchPayout = async () => {
      try {
        const response = await axios.get(ROOT_URL+'/api/payouts/all-weekly-earnings'); // Adjust this endpoint to match your API
        setWeeklypayout(response.data.data);
        console.log(response.data.data); // For debugging purposes, you can log the received data to see its structure
      } catch (error) {
        console.error( error);
      }
    };

    fetchPayout();
  }, []);
  const Handlesubmit= async (uesrId, paymentid) => {
    try {
      const response = await axios.get(
        ROOT_URL + `/api/payouts/updateWeeklyPayoutStatus/${uesrId}/${paymentid}`)
      console.log(response);
      swal('Success', 'Paid!', 'success').then(() => {
        window.location.reload(); // Reload the page after success alert
      });
  
    } catch (error) {
      console.log(error);
      
    }
  
  }
    
  
  return (
    <>
        <div className='table-responsive'>
        <CTable>
          <CTableHead>
            <CTableRow>
              {/* <CTableHeaderCell>Product ID</CTableHeaderCell> */}
              <CTableHeaderCell className='text-center'>User ID</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>User Name</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Week</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>MatchedBV</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Direct sales bonus</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Matching bonus</CTableHeaderCell>
              {/* <CTableHeaderCell className='text-center'>BV Points</CTableHeaderCell> */}
              <CTableHeaderCell className='text-center'>Payout Amount</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Payment Status</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
          {weeklypayout.map((order) =>
          order.weeklyEarnings.map((earning) => (
            <CTableRow key={earning._id}>
              <CTableDataCell className="text-center">{order.userId}</CTableDataCell>
              <CTableDataCell className="text-center">{order.userName}</CTableDataCell>
              <CTableDataCell className="text-center">{earning.week}</CTableDataCell>
              <CTableDataCell className="text-center">{earning.matchedBV}</CTableDataCell>
              <CTableDataCell className="text-center">0</CTableDataCell>
              <CTableDataCell className="text-center">0</CTableDataCell>
              <CTableDataCell className="text-center">{earning.payoutAmount}</CTableDataCell>
              <CTableDataCell className="text-center">{earning.paymentStatus}</CTableDataCell>
              <CTableDataCell className="text-center"><CButton className='btn btn-primary' onClick={() => Handlesubmit(order.userId, earning._id)} disabled={earning.paymentStatus === "Paid"}>Paid</CButton></CTableDataCell>
            </CTableRow>
          ))
        )}
          </CTableBody>
        </CTable>
        </div>
      
  
    </>
  )
}

export default Payout