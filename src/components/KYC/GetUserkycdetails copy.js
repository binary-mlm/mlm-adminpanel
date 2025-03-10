import React ,{useState,useEffect}from 'react'
// import pic from "../../assets/images/login2.png"
import axios from 'axios';
import swal from 'sweetalert';
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
  CButton,
  CFormInput
} from '@coreui/react'
const GetUserkycdetails = () => {
   const [query, setQuery] = useState('');
  const [userkycdata, setuserkycdata] = useState([])
  const [searchuserdata, setsearchuserdata] = useState([]);
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
const handlesubmit_approved = async (sponsorId) => {
  try {
    const response = await axios.post(
      ROOT_URL + `/api/admin/approveKycVerification`,
      { mySponsorId: sponsorId }
    );
    console.log(response);

    
    swal('Success', 'KYC successfully approved!', 'success').then(() => {
      window.location.reload(); // Reload the page after success alert
    });
  

  } catch (error) {
    console.log(error);
  }

}
const handlesubmit_rejected = async (sponsorId) => {
  try {
    const response = await axios.post(
      ROOT_URL + `/api/admin/rejectKycVerification`,
      { mySponsorId: sponsorId }
    );
    console.log(response);

    
    swal('Success', 'KYC successfully rejected!', 'success').then(() => {
      window.location.reload(); // Reload the page after success alert
    });
  

  } catch (error) {
    console.log(error);
  }

}
const handleInputChange = (e) => {
  setQuery(e.target.value)
}
useEffect(() => {
  const fetchuser = async () => {

    if (query.trim().length > 0) {
      setLoading(true);
      try {
        const response = await axios.get(
          `${ROOT_URL}/api/auth/searchuser?q=${query}`
        );
        setsearchuserdata(response.data.users);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setsearchuserdata([]);
    }
  };
      const debounceFetch = setTimeout(fetchuser, 300);
          return () => clearTimeout(debounceFetch);
          }, [query]);
  return (
    <>
    <CCardHeader>
    <div className='d-flex justify-content-end'>
    
    <div><CFormInput
                        className="ms-3"
                        id="searchuser"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search user..."
                      />

                      </div>
    </div>
    <h5 className='text-center mb-2'>All KYC verification for user</h5>  
        </CCardHeader>
        <CCardBody>
        {query && searchuserdata.length === 0 ? (
          <p>No user found</p>)
        : (
          <>
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
                <CTableHeaderCell scope="col">User Photo</CTableHeaderCell>
                <CTableHeaderCell scope="col" className='text-center'>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {userkycdata.map((user , index) => (
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
                  <CTableDataCell><img  className="img_hover" width={100} height={100} src={user.documents.panCardFront} alt="PAN Card" /></CTableDataCell>
                  <CTableDataCell><img className="img_hover" width={100} height={100} src={user.documents.aadharCardFront} alt="Aadhar Card Front" /></CTableDataCell>
                  <CTableDataCell><img className="img_hover" width={100} height={100} src={user.documents.aadharCardBack} alt="Aadhar Card Back" /></CTableDataCell>
                  <CTableDataCell><img  className="img_hover" width={100} height={100} src={user.documents.bankCard} alt="Bank Card" /></CTableDataCell>
                  <CTableDataCell><img  className="img_hover" width={100} height={100} src={user.documents.profilephoto} alt="userphoto" /></CTableDataCell>
                  <CTableDataCell>
                  <div className="d-flex gap-2">
                    <CButton
                      as="input"
                      className="btn btn-success text-white"
                      type="submit"
                      value="Approve"
                      onClick={() => handlesubmit_approved(user.userDetails.mySponsorId)}
                    />
                    <CButton
                      as="input"
                      className="btn btn-danger text-white"
                      type="submit"
                      value="Reject"
                      onClick={() => handlesubmit_rejected(user.userDetails.mySponsorId)}
                    />
                    </div>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        ) : (
          <p className="text-center">No pending KYC</p>
        )}
        </>
        )}
      </CCardBody>
 



    </>
  )
}

export default GetUserkycdetails