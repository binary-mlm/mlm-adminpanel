import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './kyc.css'
import {
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
} from '@coreui/react'

const GetApprovedUser = () => {
  const [query, setQuery] = useState('')
  const [userKycData, setUserKycData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL

  useEffect(() => {
    axios
      .get(`${ROOT_URL}/api/admin/kycVerification/approved`)
      .then((response) => {
        setUserKycData(response.data)
        setFilteredData(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const lowerQuery = query.toLowerCase()
    const filtered = userKycData.filter(
      (user) =>
        user.userDetails.name.toLowerCase().includes(lowerQuery) ||
        // user.userDetails.mobileNumber.includes(query) ||
        user.userDetails.mySponsorId.includes(query),
    )
    setFilteredData(filtered)
  }, [query, userKycData])

  
const handlereject = async (sponsorId) => {
  try {
    const response = await axios.post(`${ROOT_URL}/api/admin/rejectKycVerification`, { mySponsorId: sponsorId });
    if (response.status === 200) {
      swal('Success', 'KYC successfully rejected!', 'success').then(() => window.location.reload());
    }
  } catch (error) {
    console.error('Error rejecting KYC:', error);
  }
}



  return (
    <>
      <CCardHeader>
        <div className="d-flex justify-content-end">
          <CFormInput
            className="ms-3 w-25"
            id="searchUser"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search user..."
          />
        </div>
        <h5 className="text-center mb-2">All Approved Users</h5>
      </CCardHeader>
      <CCardBody>
        {filteredData.length > 0 ? (
          <CTable responsive="sm" color="dark">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">S/N</CTableHeaderCell>
                <CTableHeaderCell scope="col">User Details</CTableHeaderCell>
                <CTableHeaderCell scope="col">Bank Details</CTableHeaderCell>
                <CTableHeaderCell scope="col">PAN Card</CTableHeaderCell>
                <CTableHeaderCell scope="col">Aadhar Card (Front)</CTableHeaderCell>
                <CTableHeaderCell scope="col">Aadhar Card (Back)</CTableHeaderCell>
                <CTableHeaderCell scope="col">Bank Card</CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-center">
                  KYC
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-end">
                  Action
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-end">
                  Reject
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredData.map((user, index) => (
                <CTableRow active key={user._id}>
                  <CTableDataCell>{index + 1}.</CTableDataCell>
                  <CTableDataCell>
                    User ID: {user.userDetails.mySponsorId}
                    <br />
                    Name: {user.userDetails.name}
                    <br />
                    Mobile: {user.userDetails.mobileNumber}
                    <br />
                    PAN: {user.bankDetaills.panCard}
                    <br />
                    Aadhar: {user.bankDetaills.aadharCard}
                  </CTableDataCell>
                  <CTableDataCell>
                    Bank: {user.bankDetaills.bankName}
                    <br />
                    Account: {user.bankDetaills.accountNumber}
                    <br />
                    Branch: {user.bankDetaills.branchName}
                    <br />
                    IFSC: {user.bankDetaills.ifscCode}
                  </CTableDataCell>
                  <CTableDataCell>
                    <img
                      className="img_hover"
                      width={100}
                      height={100}
                      src={user.documents.panCardFront}
                      alt="PAN Card"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <img
                      className="img_hover"
                      width={100}
                      height={100}
                      src={user.documents.aadharCardFront}
                      alt="Aadhar Front"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <img
                      className="img_hover"
                      width={100}
                      height={100}
                      src={user.documents.aadharCardBack}
                      alt="Aadhar Back"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <img
                      className="img_hover"
                      width={100}
                      height={100}
                      src={user.documents.bankCard}
                      alt="Bank Card"
                    />
                  </CTableDataCell>
                  <CTableDataCell>{user.kycApproved}</CTableDataCell>
                  <CTableDataCell className="col text-center">
                    <Link to={`/kyc/editaprovedkyc/${user._id}`} className="mt-1">
                      <i className="fa fa-edit ms-2 mt-1 editicon"></i>
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell> <button className='btn btn-danger text-white' onClick={()=> handlereject(user.userDetails.mySponsorId)}>Reject</button></CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        ) : (
          <p className="text-center">No approved user</p>
        )}
      </CCardBody>
    </>
  )
}

export default GetApprovedUser
