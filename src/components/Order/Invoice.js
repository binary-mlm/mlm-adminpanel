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
import pdf from "../../assets/Campus.pdf"
import { Link } from 'react-router-dom';


const Transactions = () => {

  return (
    <>
      <div className='fw-bold'>
        <h3>All Transactions:-</h3></div>
      <CTable responsive="sm" color="dark" className='mt-2'>
        <CTableHead align="middle">
          <CTableRow  >
            <CTableHeaderCell scope="col" className='col-3' >Student name</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2'>Date</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>Amount</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-3'>Course name</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2'>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody align="middle" >
          <CTableRow active align="middle">
            <CTableDataCell className='col-3 '>Srijani Banerjee</CTableDataCell>
            <CTableDataCell className='col-2'>16-04-2024</CTableDataCell>
            <CTableDataCell className='col-1'>3000</CTableDataCell>
            <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
            <CTableDataCell className='col-2'><div className='d-flex justify-content-center'>
                <a><i className="fa fa-trash-o  editicon"></i></a>
                <Link to="/invoicelist"><i className="fa fa-eye editicon ms-4"></i></Link>

              </div></CTableDataCell>
          </CTableRow>
          <CTableRow active align="middle">
            <CTableDataCell className='col-3 '>Srijani Banerjee</CTableDataCell>
            <CTableDataCell className='col-2'>16-04-2024</CTableDataCell>
            <CTableDataCell className='col-1'>3000</CTableDataCell>
            <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
            <CTableDataCell className='col-2'><div className='d-flex justify-content-center'>
                <a><i className="fa fa-trash-o  editicon"></i></a>
                <Link to="/invoicelist"><i className="fa fa-eye editicon ms-4"></i></Link>

              </div></CTableDataCell>
          </CTableRow>
          <CTableRow active align="middle">
            <CTableDataCell className='col-3 '>Srijani Banerjee</CTableDataCell>
            <CTableDataCell className='col-2'>16-04-2024</CTableDataCell>
            <CTableDataCell className='col-1'>3000</CTableDataCell>
            <CTableDataCell className='col-3'>Introduction to blockchain</CTableDataCell>
            <CTableDataCell className='col-2'>
              <div className='d-flex justify-content-center'>
                <a><i className="fa fa-trash-o  editicon"></i></a>
                <Link to="/invoicelist"><i className="fa fa-eye editicon ms-4"></i></Link>

              </div>

            </CTableDataCell>
          </CTableRow>

        </CTableBody>
      </CTable>
    </>
  )
}

export default Transactions;
