import React, { useState, useEffect } from 'react';
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton,
  CFormLabel
} from '@coreui/react';
import axios from 'axios';
import swal from 'sweetalert';

function Payout() {
  const [weeklypayout, setWeeklypayout] = useState([]); // All payouts
  const [filteredPayouts, setFilteredPayouts] = useState([]); // Filtered payouts
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [totalSelectedPayout, setTotalSelectedPayout] = useState(0);
  const [selectedPayouts, setSelectedPayouts] = useState([]);

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Fetch all payouts on page load
  useEffect(() => {
    const fetchPayouts = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/api/payouts/all-weekly-earnings`);
        setWeeklypayout(response.data.data);
        setFilteredPayouts(response.data.data); // Initially show all payouts
      } catch (error) {
        console.error('Error fetching payouts:', error);
      }
    };

    fetchPayouts();
  }, []);

  // Fetch user details and filter payouts when query changes
  useEffect(() => {
    if (!query.trim()) {
      setFilteredPayouts(weeklypayout); // Reset to all payouts when search is empty
      return;
    }

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${ROOT_URL}/api/auth/searchuser?q=${query}`);
        
        if (response.data.users.length > 0) {
          // Extract all matching user IDs
          const matchingUserIds = response.data.users.map(user => user.mySponsorId);

          // Filter payouts where userId is in matchingUserIds
          const userPayouts = weeklypayout.filter(payout => matchingUserIds.includes(payout.userId));
          
          setFilteredPayouts(userPayouts);
        } else {
          setFilteredPayouts([]); // No users found
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(fetchUsers, 300);
    return () => clearTimeout(debounceFetch);
  }, [query, weeklypayout]); // Ensure filtering updates when payouts change

  // Filter payouts based on payout amount condition
  const filterPayoutsByAmount = (amount, condition) => {
    if (condition === 'all') {
      setFilteredPayouts([...weeklypayout]); // Show all payouts
      return;
    }
  
    let filtered = weeklypayout.filter(order => 
      order.weeklyEarnings.some(earning => 
        condition === 'greater' ? earning.payoutAmount > amount : earning.payoutAmount < amount
      )
    );
  
    setFilteredPayouts(filtered);
  };
  

  // Checkbox selection
  // const handleCheckboxChange = (rowId, payoutAmount) => {
  //   setSelectedRows((prevSelected) => {
  //     const updatedSet = new Set(prevSelected);
  //     let newTotal = totalSelectedPayout;
  //     if (updatedSet.has(rowId)) {
  //       updatedSet.delete(rowId);
  //       newTotal -= payoutAmount;
  //     } else {
  //       updatedSet.add(rowId);
  //       newTotal += payoutAmount;
  //     }
  //     setTotalSelectedPayout(newTotal);
  //     return updatedSet;
  //   });
  // };
  const handleCheckboxChange = (userId, payoutId, payoutAmount) => {
    setSelectedPayouts((prevSelected) => {
      const updatedList = [...prevSelected];
      const index = updatedList.findIndex(payout => payout.userId === userId && payout.payoutId === payoutId);
      let newTotal = totalSelectedPayout;
  
      if (index !== -1) {
        // Remove if already selected
        newTotal -= payoutAmount;
        updatedList.splice(index, 1);
      } else {
        // Add if not selected
        newTotal += payoutAmount;
        updatedList.push({ userId, payoutId, payoutAmount });
      }
  
      setTotalSelectedPayout(newTotal);
      return updatedList;
    });
  };
  
  const handleBulkPayment = async () => {
    if (selectedPayouts.length === 0) {
      swal("Error", "No payouts selected!", "error");
      return;
    }
  
    try {
      const response = await axios.post(`${ROOT_URL}/api/payouts/updatebulkPayoutStatus`, { userPayouts: selectedPayouts });
  
      swal("Success", response.data.message, "success").then(() => window.location.reload());
    } catch (error) {
      console.error("Bulk payment error:", error);
      swal("Error", "Failed to update payouts!", "error");
    }
  };  
  // Handle payout status update
  const handleSubmit = async (userId, paymentId) => {
    try {
      await axios.get(`${ROOT_URL}/api/payouts/updateWeeklyPayoutStatus/${userId}/${paymentId}`);
      swal('Success', 'Paid!', 'success').then(() => window.location.reload());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className='d-flex'>
          
            
          </div>
         
        </div>
          <div className="col-md-4 col-sm-12">
                  <div className="d-flex justify-content-end">
                    <div>
                      <CFormInput
                        className="ms-3"
                        id="searchFranchise"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search user..."
                      />
                    </div>
                  </div>
                </div>
      </div>
      <CDropdown >
              <CDropdownToggle color="secondary">Payout filter</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => filterPayoutsByAmount(200, 'greater')}>
                Greater than 200
                  
                </CDropdownItem>
                <CDropdownItem onClick={() =>filterPayoutsByAmount(200, 'less')} >
                Less than 200
                </CDropdownItem> 
                <CDropdownItem onClick={() => filterPayoutsByAmount(0, 'all')}>
               All Payouts
              </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className='ms-3'>
                        <CDropdownToggle color="secondary">Actions</CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem onClick={handleBulkPayment}>Mark Selected as Paid</CDropdownItem>
                          <CDropdownItem>Unpaid</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                      
            <strong className='ms-4'>Selected rows: {selectedPayouts.length}</strong>
            <strong className='ms-5'>Total Payout Amount: {totalSelectedPayout}</strong>
          
                      {/* <CButton className="ms-3" color="primary">
                        Submit
                      </CButton> */}
      <div className="table-responsive mt-1">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell className="text-center">User ID</CTableHeaderCell>
                <CTableHeaderCell className="text-center">User Name</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Week</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Matched BV</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Team Sales Bonus</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Direct Sales Bonus</CTableHeaderCell>
                <CTableHeaderCell className="text-center">TDS</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Payout Amount</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Payment Status</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredPayouts.length > 0 ? (
                filteredPayouts.map((order) =>
                  order.weeklyEarnings.map((earning) => (
                    earning.week === "2025-02-21" && (
                      <CTableRow key={earning._id}>
                        <CTableDataCell className="text-start">
                          <div className='d-flex'>
                          <input
  className="form-check-input me-2"
  type="checkbox"
  checked={selectedPayouts.some(payout => payout.userId === order.userobjectid && payout.payoutId === earning._id)}
  onChange={() => handleCheckboxChange(order.userobjectid, earning._id, earning.payoutAmount)}
/>

                            {order.userId}
                          </div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">{order.userName}</CTableDataCell>
                        <CTableDataCell className="text-center">{earning.week}</CTableDataCell>
                        <CTableDataCell className="text-center">{earning.matchedBV}</CTableDataCell>
                        <CTableDataCell className="text-center">{earning.directSalesBonus}</CTableDataCell>
                        <CTableDataCell className="text-center">{earning.teamSalesBonus}</CTableDataCell>
                        <CTableDataCell className="text-center">{earning.tds}</CTableDataCell>
                        <CTableDataCell className="text-center">{earning.payoutAmount}</CTableDataCell>
                        <CTableDataCell className="text-center">{earning.paymentStatus}</CTableDataCell>
                          <CTableDataCell className="text-center">
                                                    <CButton
                                                      className="btn btn-primary"
                                                      onClick={() => handleSubmit(order.userobjectid, earning._id)}
                                                      disabled={earning.paymentStatus === 'Paid'}
                                                    >
                                                      Paid
                                                    </CButton>
                                                  </CTableDataCell>
                      </CTableRow>
                    )
                  ))
                )
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan="9" className="text-center">
                    No payouts found
                  </CTableDataCell>
                </CTableRow>
              )}
            </CTableBody>
          </CTable>
        )}
      </div>
    </>
  );
}

export default Payout;
