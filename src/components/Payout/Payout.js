import React, { useState, useEffect } from 'react';
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CFormLabel,
  CButton,
  CDropdown,
  CFormInput,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import axios from 'axios';
import swal from 'sweetalert';
function Payout() {
  const [weeklypayout, setWeeklypayout] = useState([]); // All payouts
  const [filteredPayouts, setFilteredPayouts] = useState([]); // Filtered payouts
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());
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
  //checkbox
  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prevSelected) => {
      const updatedSet = new Set(prevSelected);
      if (updatedSet.has(rowId)) {
        updatedSet.delete(rowId); // Unselect row
      } else {
        updatedSet.add(rowId); // Select row
      }
      return updatedSet;
    });
  };
  //
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
         <div className="col-md-6 col-sm-12">
         <div className='d-flex'>
         <CDropdown>
                     <CDropdownToggle color="secondary">Actions</CDropdownToggle>
                     <CDropdownMenu>
                       <CDropdownItem>Paid</CDropdownItem>
                       <CDropdownItem>Unpaid</CDropdownItem>
                     </CDropdownMenu>
                   </CDropdown>
                   <CButton className='ms-3' color="primary">Submit</CButton>
                   </div>
                   <div className="mt-3">
        <strong>Selected rows: {selectedRows.size}</strong>
      </div>
         </div>
         <div className="col-md-6 col-sm-12">
           <div className="d-flex justify-content-end">
                       <CFormLabel className="mt-1" htmlFor="searchFranchise">
                         Search user:
                       </CFormLabel>
                       <div >
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
      <div className="table-responsive mt-3">
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
                     <CTableDataCell className="text-center"><input
                      className="form-check-input"
                      type="checkbox"
                      checked={selectedRows.has(earning._id)}
                      onChange={() => handleCheckboxChange(earning._id)}
                    /> {order.userId}</CTableDataCell>
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
