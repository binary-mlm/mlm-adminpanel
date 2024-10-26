import React, {useState} from 'react'
import {
    CCardFooter,
    CCard,
    CFormInput,
    CCol,
    CRow,
    CForm,
    CFormSelect,
    CFormLabel,
    CButton,
  } from '@coreui/react'
  import axios from 'axios'
import swal from 'sweetalert'
const Addfanchise = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL
    const [franchiseName, setfranchiseName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [contactInfo, setcontactInfo] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (
        franchiseName === '' ||
      email === '' ||
      password === '' ||
      contactInfo === ''
      
    ) {
      swal('Opps!', 'Please fill out all required fields!', 'error')
    } else {
      try {
        await axios
          .post(ROOT_URL + '/api/admin/franchise/create', {
            franchiseName,
            email,
            password,
            contactInfo
            
          }
          )
          .then((res) => {
            console.log(res)
            swal('yeah', 'Fanchise is  sucessfully inserted!', 'success').then(() => {
              window.location.reload(); // Reload the page after success alert
            });
            
          })
      } catch (error) {
        console.error('Error:', error)
        swal('Opps!', error.message, 'error')
      }
    }
  }
  return (
    
    <>
        <CRow>
        <CCol xs={12}>
          <div className=" fw-bold mt-2 mb-3" style={{ fontSize: '25px' }}>
            Add new Fanchise{' '}
          </div>
          <CCard className="mb-4 cardform">
            <CForm className="mt-4 ms-4 mb-3" method="post" encType="multipart/form-data">
              <div className="row">
                <div className="col-lg-6">
                <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput2">
                          Franchise name
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput2"
                      name="name"
                      placeholder="Enter franchise name"
                      onChange={(e) => setfranchiseName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput2">
                        Password
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput2"
                      name="name"
                      placeholder="Enter password"
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput2">
                        Email
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput2"
                      name="name"
                      placeholder="Enter Email"
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput2">
                        ContactInfo
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput2"
                      name="name"
                      placeholder="Enter contact info "
                      onChange={(e) => setcontactInfo(e.target.value)}
                    />
                  </div>
                </div>
                </div>
                <CButton
                  as="input"
                  className="btn w-25 mt-5"
                  type="submit"
                  color="primary"
                  value="Submit"
                  onClick={handleSubmit}
                />
                </CForm>
                </CCard>
                </CCol>
                </CRow>
    </>
  )
}

export default Addfanchise
