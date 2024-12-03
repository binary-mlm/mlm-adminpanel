import React, { useState, useEffect } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CAlert,
} from "@coreui/react";
import axios from "axios";


  

function Monthlypayout() {
    const [monthlypayout, setmonthlypayout] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    const fetchPayout = async () => {
      try {
        const response = await axios.get(ROOT_URL + "/api/payouts/all-monthly-earnings");
        // Check if response contains `data` or `message`
        if (response.data.data && response.data.data.length > 0) {
            setmonthlypayout(response.data.data);
        } else if (response.data.message) {
          setErrorMessage(response.data.message); // Handle no data found case
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("An error occurred while fetching the data.");
      }
    };

    fetchPayout();
  }, []);

  return (
   <>
   <h3 className="text-center mb-3">Monthly Payout</h3>
     {errorMessage ? (
      <span className="h4 text-center">{errorMessage}</span>
        
      ) : (
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="text-center">User Name</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Month</CTableHeaderCell>
              
              <CTableHeaderCell className="text-center">Payout Amount</CTableHeaderCell>
             
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {monthlypayout.map((order) =>
              order.monthlyEarnings.map((earning) => (
                <CTableRow key={earning._id}>
                  <CTableDataCell className="text-center">{order.userName}</CTableDataCell>
                  <CTableDataCell className="text-center">{earning.month}</CTableDataCell>
                 
                  <CTableDataCell className="text-center">{earning.payoutAmount}</CTableDataCell>
                 
                </CTableRow>
              ))
            )}
          </CTableBody>
        </CTable>
      )}
   </>
  )
}

export default Monthlypayout