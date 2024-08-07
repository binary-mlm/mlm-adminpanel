import {React,useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
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
  CRow,CTabs, CNav, CNavItem, CNavLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import pic from "../../../assets/images/login2.png"
 import axios from 'axios';
import swal from 'sweetalert';


const Teacherlogin = () => {
    const [username , setusername] = useState('');
    const [password , setpassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
      if (username === "") {
        swal("Opps!", "Please fill out all required fields!", "error");
      }
      else{
        axios.post(ROOT_URL+'/api/auth/teacher', {username,password })
        .then(res => {
          console.log(res);
          const { fullname: teacherfullname } = res.data;
          const {teacher_id : teacherid} = res.data;
          sessionStorage.setItem('teachername', teacherfullname);
          sessionStorage.setItem('teacherid', teacherid);
         

          swal("Welcome!", "You have successfully logged into the teacher panel.", "success");
           navigate('/teacher/dashboard');
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
    <CTabs className='tab'>
      <CNav variant="tabs">
      <CNavItem className='admin'>
            <CNavLink><Link to={"/"} style={{"textDecoration":"none" , color:"inherit"}}>
           Admin
           </Link>
            </CNavLink>
          </CNavItem>
          <CNavItem className='teacher'>
            <CNavLink ><Link to={"/teacherlogin"} style={{"textDecoration":"none" , color:"inherit"}}>
              Teacher
              </Link>
            </CNavLink>
          </CNavItem>
      </CNav>
    </CTabs>
      <CRow className="justify-content-center">
        <CCol md={8}>
        
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Teacher Login</h1>
                  <p className="text-body-secondary">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Email"  name="username"autoComplete="username" onChange={e => setusername(e.target.value)} />
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
                    
                      <CButton color="primary" className="px-4" type='submit'
                       onClick={handleSubmit}
                       >
                        Login
                      </CButton>
                     
                    </CCol>
                    
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard className="text-white bg-primary py-5 cardpic" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <img src={pic} className='img-fluid' alt='noimage'/>
                    
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

export default Teacherlogin