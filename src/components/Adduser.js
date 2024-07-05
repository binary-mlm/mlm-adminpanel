/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
    CCardFooter,
    CCard,
    CFormInput,
    CCol,
    CRow,
    CForm,
    CImage,
    CFormSelect,
    CFormLabel,
    CButton
} from '@coreui/react'
import { Link } from 'react-router-dom';
const Adduser = () => {
    const [phoneno,setPhoneno] = useState();
    const[email,seEmail] = useState();
    const [password, setPassword] = useState('');
    
    const [confirmpasserror, setconfirmpasserror] = useState(false)

    const[phonenoerror , setmobilerror] = useState(false);
    const[emailerror , setemailerror] = useState(false);
    const [passwordError, setpasserror] = useState('')
    const handlephonenumber =(e)=>{
        let item = e.target.value;
        if (item.length != 10) {
            setmobilerror(true)
        } else {
            setmobilerror(false)
        }

    }
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
    function passwordHandler(e) {
        let item = e.target.value;
        if (!/[A-Z]/.test(item)) {
            setpasserror("Password must contain one uppercase letter");
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(item)) {
            setpasserror("Password must contain one Special character");
        }
        else if (!/\d/.test(item)) {
            setpasserror('Password must contain at least one number');
        }
        else if (item.length < 8) {
            setpasserror('Password must be at least 8 characters long');
        }
        else {
            setpasserror("")
        }
    }
    function confirmpasswordHandler(e) {
        let item = e.target.value;
        let password_value = document.getElementById('password').value;

        if (password_value !== item) {
            setconfirmpasserror(true);

        } else {
            setconfirmpasserror(false);
        }
    }
    return (
        <>
            <CRow>
                <CCol xs={12} >
                    <Link className="linkto" to="/userlist"><div className='d-flex mt-2'><i className="fa fa-arrow-left  mt-1"></i><span className='ms-2 fw-bold'>Back to Userlist</span></div></Link>

                    <div className=' fw-bold mt-2 mb-3' style={{ fontSize: "25px" }}>User Information</div>
                    <CCard className="mb-4 cardform">
                        <CForm className='mt-4 ms-4 mb-3'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleFormControlInput1">Full Name</CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="fullname"
                                            name='fullname'
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleFormControlInput2">Phone number</CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="phoneno"
                                            name='phoneno'

                                            onKeyUp={handlephonenumber}
                                            onChange={e => setPhoneno(e.target.value)}
                                        />
                                          {phonenoerror ? <span className='link-danger'>phone no invalid</span> : ""}

                                    </div>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleFormControlInput2">Date of Birth</CFormLabel>
                                        <CFormInput
                                            type="date"
                                            id="FormControlInput3"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleFormControlInput5">Password</CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="password"
                                            name='password'
                                            onKeyUp={passwordHandler}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                         {passwordError && <span className='link-danger'>{passwordError}</span>}
                                                     <div className='link-warning'>Password must me 8 character, one Uppercase, one special character</div>
                                    </div>
                                    {/* <div className="mb-3 ">
                                        <CFormLabel htmlFor="exampleFormControlInput2">Image</CFormLabel>
                                        <div>
                                        <CImage src={pic1} width={200} height={200} className='exampleFormControlInput2'/>
                                        </div>
                                      
                                    </div> */}
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mb-3'>
                                        <CFormLabel htmlFor="exampleFormControlInput3">Email Address</CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="email"
                                            name='email'
                                            onKeyUp={emailHandler}
                                            onChange={e => seEmail(e.target.value)}
                                        />
                                        {emailerror ? <span className='link-danger'>phone no invalid</span> : ""} 
                                    </div>
                                    <div className="mb-3  ">
                                    <CFormLabel htmlFor="exampleFormControlInput5">State</CFormLabel>
                                        <CFormSelect
                                            aria-label="Default select example"
                                            options={[
                                                'Open this select menu',
                                                { label: 'West Bengal', value: 'West Bengal' },
                                                { label: 'Karnataka', value: 'Karnataka' },
                                                { label: 'Delhi', value: 'Delhi'}
                                            ]}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleFormControlInput5">City</CFormLabel>
                                        <CFormSelect
                                            aria-label="Default select example"
                                            options={[
                                                'Open this select menu',
                                                { label: 'Howrah', value: 'Howrah' },
                                                { label: 'Kolkata', value: 'Kolkata' },
                                                { label: 'Bardhaman', value: 'Bardhaman'}
                                            ]}
                                        />
                                        
                                    </div>

                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleFormControlInput5">Confirm password</CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="confirmpassword"
                                            name='confirmpassword'
                                            onKeyUp={confirmpasswordHandler}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        {confirmpasserror ? <span className='link-danger'>Password does not matched</span> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <CButton className='btn btn-primary btn-md w-25'>Save</CButton>
                            </div>
                        </CForm>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Adduser
