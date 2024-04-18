/* eslint-disable prettier/prettier */
import React from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { Link } from 'react-router-dom';

const Userlist = () => {
    return (
        <>
            <div className='fw-bold'>
                <h3>All Users:-</h3></div>
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
                    </CTableRow>

                </CTableBody>
            </CTable>

        </>
    )
}

export default Userlist