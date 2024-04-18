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

const Orders = () => {
  return (
    <>
    <div className='fw-bold'>
    <h3>All Orders:-</h3></div>

    <CTable color="dark" className='mt-2' responsive="sm">
                <CTableHead align="middle">
                    <CTableRow  >
                        <CTableHeaderCell scope="col" className='col-2' >order_id</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>User_name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Course name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-2'>category</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-1'>amount</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody align="middle" >
                    <CTableRow active align="middle">
                        <CTableDataCell className='col-2 '>789654123</CTableDataCell>
                        <CTableDataCell className='col-3'>Srijani Banerjee</CTableDataCell>
                        <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
                        <CTableDataCell  className='col-2'>blockchain</CTableDataCell>
                     
                        <CTableDataCell className='col-1'>
                            5000/-
                            
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow active align="middle">
                        <CTableDataCell className='col-2 '>789654123</CTableDataCell>
                        <CTableDataCell className='col-3'>Srijani Banerjee</CTableDataCell>
                        <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
                        <CTableDataCell  className='col-2'>blockchain</CTableDataCell>
                        <CTableDataCell className='col-1'>
                            5000/-
                            
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow active align="middle">
                        <CTableDataCell className='col-2 '>789654123</CTableDataCell>
                        <CTableDataCell className='col-3'>Srijani Banerjee</CTableDataCell>
                        <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
                        <CTableDataCell  className='col-2'>blockchain</CTableDataCell>
                     
                        <CTableDataCell className='col-1'>
                            5000/-
                            
                        </CTableDataCell>
                    </CTableRow>
                    
                    

                </CTableBody>
            </CTable>

    </>
   
  )
}
export default Orders;