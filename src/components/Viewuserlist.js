/* eslint-disable prettier/prettier */
import { useState, React } from 'react'
import { CCard, CFormInput, CCol, CRow, CForm, CImage, CFormLabel, CButton } from '@coreui/react'
import { Link } from 'react-router-dom'
import pic1 from '../assets/images/login1.jpg'

const Viewuserlist = () => {
  // const [user, setUser] = useState({
  //     Name: 'Srijani Banerjee',
  //     email: 'srijani@example.com',
  //     dateofbirth: "24/06/2024",
  //     city: "Howrah",
  //     State: "West Bengal",
  //     username:"srijani@123"
  //     // Add more fields as needed
  // });

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <Link className="linkto" to="/userlist">
            <div className="d-flex mt-2">
              <i className="fa fa-arrow-left  mt-1"></i>
              <span className="ms-2 fw-bold">Back to Userlist</span>
            </div>
          </Link>

          <div className=" fw-bold mt-2 mb-3" style={{ fontSize: '25px' }}>
            User Information
          </div>
          <CCard className="mb-4 cardform">
            <CForm className="mt-4 ms-4 mb-3">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Name</CFormLabel>
                    <CFormInput type="text" id="exampleFormControlInput1" value="hiii" readOnly />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput2">City</CFormLabel>
                    <CFormInput type="text" id="exampleFormControlInput2" value="howrah" readOnly />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput2">Date of Birth</CFormLabel>
                    <CFormInput type="text" id="exampleFormControlInput2" value="24/07" readOnly />
                  </div>
                  <div className="mb-3 ">
                    <CFormLabel htmlFor="exampleFormControlInput2">Image</CFormLabel>
                    <div>
                      <CImage
                        src={pic1}
                        width={200}
                        height={200}
                        className="exampleFormControlInput2"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput3">Email Id</CFormLabel>
                    <CFormInput type="text" id="exampleFormControlInput3" value="email" readOnly />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput4">State</CFormLabel>
                    <CFormInput type="text" id="exampleFormControlInput4" value="State" readOnly />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput5">Username</CFormLabel>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput5"
                      value="username"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <CButton
                  as="input"
                  className="btn w-25"
                  type="submit"
                  color="primary"
                  value="Upload"
                  
                />
              </div>
            </CForm>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Viewuserlist
