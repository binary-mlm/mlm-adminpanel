import{React, useState,}  from 'react'
import { useNavigate } from 'react-router-dom';

import {
    CCard,
    CFormInput,
    CCol,
    CRow,
    CForm,
    CFormLabel,
    // CFormTextarea,
    // CFormCheck,
    CButton,
  } from '@coreui/react'
  import axios from 'axios'
import swal from 'sweetalert'
const Addteacher = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const[teacherdept , setteacherdept] = useState('')
  const [password , setPassword] = useState('')
  const [phoneno , setPhno] = useState('')
  const [pancard , setPancard] = useState('')
  const [address , setAddress] = useState('')

  const [emailerror, setemailerror] = useState(false)
  const [mobilenoerror, setmobileerror] = useState(false)

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
function emailHandler(e) {
    let item = e.target.value;
    if (!isValidEmail(item)) {
        setemailerror(true);
    } else {
        setemailerror(false);
    }
}
function mobileHandler(e) {
    let item = e.target.value;
    if (item.length != 10) {
        setmobileerror(true)
    } else {
        setmobileerror(false)
    }
}
  const handleSubmit = async (event) => {
    event.preventDefault()
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

     alert("submit works")
    if (
      fullname === '' || email === '' || teacherdept === "" || password === "" || phoneno === '' || pancard === '' || address === '') {
      swal('Opps!', 'Please fill out all required fields!', 'error')
    } else {
     
      try {
        await axios
          .post(ROOT_URL+'/api/auth/addteacher', {
            fullname,
            email,
            teacherdept,
            password,
            phoneno,pancard, address})
            .then((res) => {
            console.log(res)
            swal('yeah', 'New teacher added!', 'success')
            navigate('/dashboard');
          
            
          })
      } catch (error) {
        console.error('Error:', error)
        swal('Opps!', 'Not inserted !', 'error')
      }
    }
  }

  return (
    <CRow>
    <CCol xs={12}>
      <div className=" fw-bold mt-2 mb-3" style={{ fontSize: '25px' }}>
        Add new teacher
      </div>
      <CCard className="mb-4 cardform">
          <CForm className="mt-4 ms-4 mb-3" method="post" encType="multipart/form-data">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Full Name
                        <sup>
                          <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                        </sup>
                      </CFormLabel>
                    </div> 
                  </div>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    name="fullname"
                    placeholder="Enter Teacher name"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Email
                        <sup>
                          <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                        </sup>
                      </CFormLabel>
                    </div> 
                  </div>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    name="email"
                    onKeyUp={emailHandler}
                    placeholder="Enter Teacher email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                    {emailerror ? <span className='text-white'>Email invalid</span> : ""}
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Teacher dept
                        <sup>
                          <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                        </sup>
                      </CFormLabel>
                    </div> 
                  </div>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    name="email"
                  
                    placeholder="Enter Teacher email"
                    onChange={(e) => setteacherdept(e.target.value)}
                  />
                  
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Password
                        <sup>
                          <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                        </sup>
                      </CFormLabel>
                    </div> 
                  </div>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    name="password"
                    placeholder="Enter a password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                </div>
                <div className="col-lg-6">
                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Phone no
                        <sup>
                          <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                        </sup>
                      </CFormLabel>
                    </div> 
                  </div>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    name="phoneno"
                    onKeyUp={mobileHandler}
                    placeholder="Enter phone number"
                    onChange={(e) => setPhno(e.target.value)}
                  />
                   {mobilenoerror ? <span className='text-white'>phone no invalid</span> : ""}
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Pan card
                        <sup>
                          <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                        </sup>
                      </CFormLabel>
                    </div> 
                  </div>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    name="Pancard"
                    placeholder="Enter pan card"
                    onChange={(e) => setPancard(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Address
                        <sup>
                          <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                        </sup>
                      </CFormLabel>
                    </div> 
                  </div>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    name="address"
                    placeholder="Enter teacher Address"
                    onChange={(e) => setAddress(e.target.value)}
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
                value="Submit"
                 onClick={handleSubmit}
              />
            </div>
                </CForm>
                </CCard>

      </CCol>
      </CRow>
  )
}

export default Addteacher