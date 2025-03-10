import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./kyc.css";
import {
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput
} from '@coreui/react';

const GetRejectUser = () => {
  const [query, setQuery] = useState('');
  const [userKycData, setUserKycData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    axios.get(`${ROOT_URL}/api/admin/kycVerification/rejected`)
      .then((response) => {
        setUserKycData(response.data);
        setFilteredData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    setFilteredData(
      userKycData.filter(user =>
        user.userDetails.name.toLowerCase().includes(lowerQuery) ||
       
        user.userDetails.mySponsorId.includes(lowerQuery)
      )
    );
  }, [query, userKycData]);

  return (
    <>
      <CCardHeader>
        <div className='d-flex justify-content-end'>
          <CFormInput
            className="ms-3 w-25"
            id="searchUser"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search user..."
          />
        </div>
        <h5 className='text-center mb-2'>All Rejected User KYC</h5>
      </CCardHeader>
      <CCardBody>
        {filteredData.length > 0 ? (
          <CTable responsive="sm" color="dark">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>S/N</CTableHeaderCell>
                <CTableHeaderCell>User Details</CTableHeaderCell>
                <CTableHeaderCell>Bank Details</CTableHeaderCell>
                <CTableHeaderCell>PAN Card</CTableHeaderCell>
                <CTableHeaderCell>Aadhar Card (Front)</CTableHeaderCell>
                <CTableHeaderCell>Aadhar Card (Back)</CTableHeaderCell>
                <CTableHeaderCell>Bank Card</CTableHeaderCell>
                <CTableHeaderCell className='text-center'>KYC</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredData.map((user, index) => (
                <CTableRow active key={user._id}>
                  <CTableDataCell>{index + 1}.</CTableDataCell>
                  <CTableDataCell>
                    User ID: {user.userDetails.mySponsorId}<br />
                    Name: {user.userDetails.name}<br />
                    Mobile Number: {user.userDetails.mobileNumber}<br />
                    PAN Card No: {user.bankDetaills.panCard}<br />
                    Aadhar Card No: {user.bankDetaills.aadharCard}
                  </CTableDataCell>
                  <CTableDataCell>
                    Bank Name: {user.bankDetaills.bankName}<br />
                    Account Number: {user.bankDetaills.accountNumber}<br />
                    Branch Name: {user.bankDetaills.branchName}<br />
                    IFSC Code: {user.bankDetaills.ifscCode}
                  </CTableDataCell>
                  <CTableDataCell>
                    <img className='img_hover' width={100} height={100} src={user.documents.panCardFront} alt="PAN Card" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <img className="img_hover" width={100} height={100} src={user.documents.aadharCardFront} alt="Aadhar Card Front" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <img className="img_hover" width={100} height={100} src={user.documents.aadharCardBack} alt="Aadhar Card Back" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <img className="img_hover" width={100} height={100} src={user.documents.bankCard} alt="Bank Card" />
                  </CTableDataCell>
                  <CTableDataCell>
                    {user.kycApproved}
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        ) : (
          <p className="text-center">No rejected users found</p>
        )}
      </CCardBody>
    </>
  );
};

export default GetRejectUser;
