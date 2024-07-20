/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'

import {
    CTable,
    CTableBody, 
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'
  import axios from 'axios';
  const Offlineusers = () => {
    const [student , setStudent] = useState([]);
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    useEffect(() =>{
        axios.get( ROOT_URL+'/api/auth/getofflineuser')
        .then(student => setStudent(student.data.data))
        .catch(err => console.log(err))
       
    }, []);
  
    return (
        <>
        <div className='fw-bold'>
        <h3>All Offline Students:-</h3></div> 
        <CTable responsive="sm" color="dark">
        <CTableHead align="middle">
          <CTableRow  >
          
            <CTableHeaderCell scope="col" className='col-2' >Student name</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2'>Course name </CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-3'>Email_id</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>Phoneno</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>Amount</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2'>City</CTableHeaderCell>
            
          
            <CTableHeaderCell scope="col" className='col-1'>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody align="middle">
        {
              student.map((user) => {
                return  <CTableRow active key={user._id}>
               
        
                <CTableDataCell className='col-2'>{user.fullname}</CTableDataCell>
                <CTableDataCell className='col-2'>{user.course}</CTableDataCell>
                <CTableHeaderCell scope="col" className='col-3'>{user.email}</CTableHeaderCell>
                <CTableDataCell className='col-1'>{user.phoneno}</CTableDataCell>
                        <CTableDataCell className='col-1'>{user.amount}</CTableDataCell>
                        <CTableHeaderCell scope="col" className='col-2'>{user.cities}</CTableHeaderCell>
                        <CTableDataCell>
                          <a><i className="fa fa-edit ms-2 editicon"></i></a> 
                         </CTableDataCell>
                        </CTableRow>
              })
            }
        </CTableBody>
      </CTable>
        </>
    )

  }
  export default Offlineusers