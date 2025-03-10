import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CFormInput
} from '@coreui/react';

const GetUserkycdetails = () => {
  const [query, setQuery] = useState('');
  const [userkycdata, setUserKycData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    axios.get(`${ROOT_URL}/api/admin/kycVerification/pending`)
      .then((response) => {
        setUserKycData(response.data);
        setFilteredData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = userkycdata.filter(user => 
        user.userDetails.name.toLowerCase().includes(query.toLowerCase()) ||
        user.userDetails.mobileNumber.includes(query) ||
        user.userDetails.mySponsorId.includes(query)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(userkycdata);
    }
  }, [query, userkycdata]);

  const handleApproval = async (sponsorId, status) => {
    try {
      const endpoint = status === 'approve' ? 'approveKycVerification' : 'rejectKycVerification';
      await axios.post(`${ROOT_URL}/api/admin/${endpoint}`, { mySponsorId: sponsorId });
      swal('Success', `KYC successfully ${status}d!`, 'success').then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CCardHeader>
        <div className='d-flex justify-content-end'>
          <CFormInput
            className='ms-3 w-25'
            id='searchuser'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search user...'
          />
        </div>
        <h5 className='text-center mb-2'>All KYC verification for users</h5>
      </CCardHeader>
      <CCardBody>
        {filteredData.length > 0 ? (
          <CTable responsive='sm' color='dark'>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>S/N</CTableHeaderCell>
                <CTableHeaderCell>User Details</CTableHeaderCell>
                <CTableHeaderCell>Bank Details</CTableHeaderCell>
                <CTableHeaderCell>PAN Card</CTableHeaderCell>
                <CTableHeaderCell>Aadhar (Front)</CTableHeaderCell>
                <CTableHeaderCell>Aadhar (Back)</CTableHeaderCell>
                <CTableHeaderCell>Bank Card</CTableHeaderCell>
                <CTableHeaderCell>User Photo</CTableHeaderCell>
                <CTableHeaderCell className='text-center'>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredData.map((user, index) => (
                <CTableRow key={user._id}>
                  <CTableDataCell>{index + 1}.</CTableDataCell>
                  <CTableDataCell>
                    ID: {user.userDetails.mySponsorId}<br />
                    Name: {user.userDetails.name}<br />
                    Mobile: {user.userDetails.mobileNumber}<br />
                    PAN: {user.bankDetaills.panCard}<br />
                    Aadhar: {user.bankDetaills.aadharCard}
                  </CTableDataCell>
                  <CTableDataCell>
                    Bank: {user.bankDetaills.bankName}<br />
                    Acc#: {user.bankDetaills.accountNumber}<br />
                    Branch: {user.bankDetaills.branchName}<br />
                    IFSC: {user.bankDetaills.ifscCode}
                  </CTableDataCell>
                  {['panCardFront', 'aadharCardFront', 'aadharCardBack', 'bankCard', 'profilephoto'].map((doc, i) => (
                    <CTableDataCell key={i}>
                      <img className='img_hover' width={100} height={100} src={user.documents[doc]} alt={doc} />
                    </CTableDataCell>
                  ))}
                  <CTableDataCell>
                    <div className='d-flex gap-2'>
                      <CButton className='btn btn-success text-white' onClick={() => handleApproval(user.userDetails.mySponsorId, 'approve')}>Approve</CButton>
                      <CButton className='btn btn-danger text-white' onClick={() => handleApproval(user.userDetails.mySponsorId, 'reject')}>Reject</CButton>
                    </div>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        ) : (
          <p className='text-center'>No pending KYC</p>
        )}
      </CCardBody>
    </>
  );
};

export default GetUserkycdetails;
