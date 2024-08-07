/* eslint-disable prettier/prettier */
import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Userlist = () => {
    const navigate = useNavigate()
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [userdata, setuserdata] = useState([])
    useEffect(() =>{
        const Admintoken = localStorage.getItem('admintoken');
        axios.get(ROOT_URL+'/api/auth/getuser',{
            headers: {
              Authorization: `Bearer ${Admintoken}`,
            }
            })
        .then(userdata => setuserdata(userdata.data.data))
        .catch((err) => {
            console.log(err);
            swal("Session Expired!", "Your session has expired. Please log in again to continue.", "warning");
            localStorage.removeItem('Admintoken');
        navigate('/');
        });
    
       
    }, []);
    
    return (
        <>
            <div className='fw-bold'>
                <div className='row'>
                    <div className='col'>
                    <h3>All Users</h3>
                    </div>
                    {/* <div className='col text-end'>
                      <Link to="/adduser"><button className=' btn btn-success btn-md' >ADD USER</button></Link>  
                    </div> */}
                </div>
                </div>
            <CTable  responsive="sm" color="dark" className='mt-2'>
                <CTableHead align="middle">
                    <CTableRow  >
                        <CTableHeaderCell scope="col" className='col-2' >Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>User_id</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Email_id</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-2'>Phone number</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-1'>Block</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-1'>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody align="middle" >
                {
              userdata.map((user , index) => {
                return <CTableRow active key={index} >
                  <CTableDataCell >{user.fullname}</CTableDataCell>
                    <CTableDataCell>{user._id}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>{user.phoneno}</CTableDataCell>
                    <CTableDataCell className='col-1'>
                            <div className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div>
                        </CTableDataCell>
                        <CTableDataCell className='col-1'>
                            <div className='d-flex'>
                            <a><i className="fa fa-trash-o ms-2 editicon"></i></a>
                            <Link to="/viewuserlist"><i className="fa fa-eye ms-4 editicon"></i></Link>

                            </div>
                            
                        </CTableDataCell>

                </CTableRow>
              })
             }

                    {/* <CTableRow active align="middle">
                        <CTableDataCell className='col-2 '>example</CTableDataCell>
                        <CTableDataCell className='col-3'>7896541230</CTableDataCell>
                        <CTableDataCell className='col-3'>Example@gmail.com</CTableDataCell>
                        <CTableDataCell  className='col-2'>8584062451</CTableDataCell>
                        <CTableDataCell className='col-1'>
                            <div className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div>
                        </CTableDataCell>
                        <CTableDataCell className='col-1'>
                            <div className='d-flex'>
                            <a><i className="fa fa-trash-o ms-2 editicon"></i></a>
                            <Link to="/viewuserlist"><i className="fa fa-eye ms-4 editicon"></i></Link>

                            </div>
                            
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow active align="middle">
                        <CTableDataCell className='col-2 '>example</CTableDataCell>
                        <CTableDataCell className='col-3'>7896541230</CTableDataCell>
                        <CTableDataCell className='col-3'>Example@gmail.com</CTableDataCell>
                        <CTableDataCell  className='col-2'>8584062451</CTableDataCell>
                        <CTableDataCell className='col-1'>
                            <div className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div>
                        </CTableDataCell>
                        <CTableDataCell className='col-1'>
                        <div className='d-flex'>
                            <a><i className="fa fa-trash-o ms-2 editicon"></i></a>
                            <Link to="/viewuserlist"><i className="fa fa-eye ms-4 editicon"></i></Link>

                            </div>
                        </CTableDataCell>
                    </CTableRow> */}
                    
                    
                    
                </CTableBody>
            </CTable>

        </>
    )
}

export default Userlist