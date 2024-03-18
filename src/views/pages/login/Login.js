/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import pic from "../../../assets/images/login2.png"
import axios from 'axios';
import swal from 'sweetalert';

const Login = () => {
  const [username , setusername] = useState('');
  const [password , setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
   

    if (username === "" || password === "") {
      swal("Opps!", "Please fill out all required fields!", "error");
    }
    else {
      event.preventDefault();
         alert("submit");
      axios.post('http://localhost:8000/api/v1/login', { username, password })
        .then(res => {
          console.log(res);

          swal("Sucessfully login!", "login sucessfully!", "success");
           navigate('/dashboard');
          // navigate('/course');

        })
        .catch(err => {
          console.log(err);
          swal("Opps!", "username or password icorrect!", "error");

        })


    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username"  name="username"autoComplete="username" onChange={e => setusername(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name='password'
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={e => setpassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                      
                        <CButton color="primary" className="px-4" type='submit' onClick={handleSubmit}>
                          Login
                        </CButton>
                       
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <img src={pic} className='img-fluid' alt='noimage'/>
                    {/* <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
