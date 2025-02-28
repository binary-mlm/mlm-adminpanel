import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import "./kyc.css";


import {
  CCardFooter,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton
} from '@coreui/react'

const Getaproveduser = () => {
    const [userkycdata, setuserkycdata] = useState([])
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    useEffect(() => {
      axios.get(ROOT_URL+'/api/admin/kycVerification/approved')   
      .then((userdata) =>{
        setuserkycdata(userdata.data);
       
        console.log(userdata.data);
      } )
      .catch((err) =>{
         console.log(err); 
       }
      )     
  }, []);
  return (
    <>
        <CCardHeader>
          <h5 className='text-center mb-2'>All Approved User</h5>
        </CCardHeader>
        <CCardBody>
        {userkycdata.length > 0 ? (
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
                <CTableHeaderCell scope="col" className='text-center'>KYC</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {userkycdata.map((user,index) => (
                <CTableRow active key={user._id}>
                <CTableDataCell>{index+1}.</CTableDataCell>
                  <CTableDataCell>
                    Sponsor ID: {user.userDetails.mySponsorId}<br/>
                    Name: {user.userDetails.name}<br/>
                    Mobile Number: {user.userDetails.mobileNumber}<br/>
                    PAN Card No: {user.bankDetaills.panCard}<br/>
                    Aadhar Card No: {user.bankDetaills.aadharCard}
                  </CTableDataCell>
                  <CTableDataCell>
                    Bank Name: {user.bankDetaills.bankName}<br/>
                    Account Number: {user.bankDetaills.accountNumber}<br/>
                    Branch Name: {user.bankDetaills.branchName}<br/>
                    IFSC Code: {user.bankDetaills.ifscCode}
                  </CTableDataCell>
                  <CTableDataCell><img className='img_hover' width={100} height={100} src={user.documents.panCardFront} alt="PAN Card" /></CTableDataCell>
                  <CTableDataCell><img className="img_hover" width={100} height={100} src={user.documents.aadharCardFront} alt="Aadhar Card Front" /></CTableDataCell>
                  <CTableDataCell><img  className="img_hover" width={100} height={100} src={user.documents.aadharCardBack} alt="Aadhar Card Back" /></CTableDataCell>
                  <CTableDataCell><img className="img_hover" width={100} height={100} src={user.documents.bankCard} alt="Bank Card" /></CTableDataCell>
                  <CTableDataCell>
                    {user.kycApproved}
                  </CTableDataCell>
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

export default Getaproveduser