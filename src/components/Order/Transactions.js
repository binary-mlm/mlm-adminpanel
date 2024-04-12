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


const Transactions = () => {
  return (
    <>
      <div className='fw-bold'>
        <h3>All Transactions:-</h3></div>
      <CTable responsive="sm" color="dark" className='mt-2'>
        <CTableHead align="middle">
          <CTableRow  >
            <CTableHeaderCell scope="col" className='col-2' >order_id</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2'>transaction_id</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-3'>Course name</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2'>user name</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2'>category</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>amount</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>invoice</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody align="middle" >
          <CTableRow active align="middle">
            <CTableDataCell className='col-2 '>1234567896</CTableDataCell>
            <CTableDataCell className='col-2'>789652124545454444</CTableDataCell>
            <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
            <CTableDataCell className='col-2'>Srijani Banerjee</CTableDataCell>
            <CTableDataCell className='col-2'>blockchain</CTableDataCell>
            <CTableDataCell className='col-1'>30000</CTableDataCell>
            <CTableDataCell className='col-1'><i className='fa fa-download'></i></CTableDataCell>
          </CTableRow>
          <CTableRow active align="middle">
            <CTableDataCell className='col-2 '>1234567896</CTableDataCell>
            <CTableDataCell className='col-2'>789652124545454444</CTableDataCell>
            <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
            <CTableDataCell className='col-2'>Srijani Banerjee</CTableDataCell>
            <CTableDataCell className='col-2'>blockchain</CTableDataCell>
            <CTableDataCell className='col-1'>30000</CTableDataCell>
            <CTableDataCell className='col-1'><i className='fa fa-download'></i></CTableDataCell>
          </CTableRow>
          <CTableRow active align="middle">
            <CTableDataCell className='col-2 '>1234567896</CTableDataCell>
            <CTableDataCell className='col-2'>789652124545454444</CTableDataCell>
            <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
            <CTableDataCell className='col-2'>Srijani Banerjee</CTableDataCell>
            <CTableDataCell className='col-2'>blockchain</CTableDataCell>
            <CTableDataCell className='col-1'>30000</CTableDataCell>
            <CTableDataCell className='col-1'><i className='fa fa-download'></i></CTableDataCell>
          </CTableRow>
          
          
          



        </CTableBody>
      </CTable>
    </>
  )
}

export default Transactions;
