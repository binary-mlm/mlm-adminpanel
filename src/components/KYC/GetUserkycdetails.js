import React ,{useState,useEffect}from 'react'
// import pic from "../../assets/images/login2.png"
import axios from 'axios';
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
} from '@coreui/react'
import './kyc.css'
const GetUserkycdetails = () => {
  const [userkycdata, setuserkycdata] = useState([])
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    axios.get(ROOT_URL+'/api/admin/kycVerification/pending')   
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
          <h5 className='text-center mb-2'>All KYC varification for user</h5>
        </CCardHeader>
        <CCardBody>
          <CTable responsive="sm" color="dark">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">User Details</CTableHeaderCell>
                <CTableHeaderCell scope="col">Bank Details</CTableHeaderCell> 
                <CTableHeaderCell scope="col">Personal Details </CTableHeaderCell>
                <CTableHeaderCell scope="col">PAn Card </CTableHeaderCell>
                <CTableHeaderCell scope="col">PAn Card </CTableHeaderCell>
                <CTableHeaderCell scope="col">PAn Card </CTableHeaderCell>
                <CTableHeaderCell scope="col">PAn Card </CTableHeaderCell>

                <CTableHeaderCell scope="col" className='text-center'>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
             {
              userkycdata.map((user) => {
                return <CTableRow active key={user._id} >
                  <CTableDataCell>Sponsor_id: {user.userDetails.mySponsorId}<br/>
                  Name: {user.userDetails.name}<br/>
                  MobileNumber: {user.userDetails.mobileNumber} 
                  </CTableDataCell>
                    
                    <CTableDataCell>Bankname: {user.bankDetaills.bankName} <br/>
                    AccountNumber: {user.bankDetaills.accountNumber} <br/>
                    BranchName: {user.bankDetaills.branchName} <br/>
                    IFSCCode: {user.bankDetaills.ifscCode} </CTableDataCell>
                    <CTableDataCell>PanCard No:{user.bankDetaills.panCard}
                    <br/>
                    AadharCard No:{user.bankDetaills.aadharCard}</CTableDataCell>
                    
                
                    <CTableDataCell><img width={100} height={100} src={user.documents.panCardFront}/></CTableDataCell>
                    <CTableDataCell><img width={100} height={100} src={user.documents.panCardFront}/></CTableDataCell>
                    <CTableDataCell><img width={100} height={100} src={user.documents.panCardFront}/></CTableDataCell>
                    <CTableDataCell><img width={100} height={100} src={user.documents.panCardFront}/></CTableDataCell>
                 
                    {/* <CTableDataCell><img width={100} height={100} src={product.imageURL}/></CTableDataCell> */}
                    </CTableRow>
                  })
             }
            </CTableBody>
          </CTable>
        </CCardBody>

    
     



    </>
  )
}

export default GetUserkycdetails