import React from 'react'
import pic from "../../assets/images/login2.png"
import './kyc.css'
const GetUserkycdetails = () => {
  return (
    <>
     <div className="kyc-container">
      {/* Left Column: User Information */}
      <div className="kyc-left">
        <div className="kyc-section">
          {/* <img  alt="Profile" className="profile-pic" /> */}
          <h2>hiii</h2>
          <p><strong>Email:</strong>hii</p>
          <p><strong>Phone:</strong> ggg</p>
          <p><strong>Date of Birth:</strong>545</p>
          <p><strong>Address:</strong>hhhv</p>
          <p><strong>KYC Status:</strong> <span>hiii</span></p>
          <p><strong>Submission Date:</strong>545445</p>
        </div>
      </div>

      {/* Right Column: Document Verification */}
      <div className="kyc-right">
        <div className="kyc-section">
          <h3>Government ID Proof</h3>
          <img src={pic} alt="Government ID" className="document-img" />
        </div>
        <div className="kyc-section">
          <h3>Selfie with ID</h3>
          <img src={pic} alt="Selfie with ID" className="document-img" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="kyc-actions">
        <button className="approve-btn">Approve</button>
        {/* <button className="reject-btn">Reject</button>
        <button className="reupload-btn">Request Re-upload</button> */}
        
      </div>
    </div>



    </>
  )
}

export default GetUserkycdetails