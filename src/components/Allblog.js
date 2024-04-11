/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import img from '../assets/images/login2.png';
import {
    CTable,
    CTableBody, 
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'

const Allblog = () => {
    const [blog , setBlog] = useState([])
  return (
    <>
    <div className='fw-bold'>
        <h3>All Blogs:-</h3></div> 
        <CTable color="dark" className='mt-2'>
        <CTableHead align="middle">
          <CTableRow  >
            <CTableHeaderCell scope="col" className='col-3' >Blog title</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-5'>Blog Desdription</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-3'>Blog image</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>Blog Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
        <CTableRow active  align="middle">
        <CTableDataCell>example1</CTableDataCell>
                <CTableDataCell>exampleghghghgghgfshgshghggfgghg</CTableDataCell>
                <CTableDataCell><img width={150}  height={150} src={img} /></CTableDataCell>
                <CTableDataCell>
                  <a><i className="fa fa-edit ms-2 editicon"></i></a> 
                  <a><i className="fa fa-trash-o ms-3 deleteicon"></i></a></CTableDataCell>
                </CTableRow>
                <CTableRow active  align="middle">
        <CTableDataCell >example1</CTableDataCell>
                <CTableDataCell>exampleghghghgghgfshgshghggfgghg</CTableDataCell>
                <CTableDataCell><img width={150}  height={150} src={img} /></CTableDataCell>
                <CTableDataCell>
                  <a><i className="fa fa-edit ms-2 editicon"></i></a> 
                  <a><i className="fa fa-trash-o ms-3 deleteicon"></i></a></CTableDataCell>
                </CTableRow>
                <CTableRow active align="middle">
        <CTableDataCell >example1</CTableDataCell>
                <CTableDataCell className='celltext' ><p className='text-break'>exampleghghggjjhjhhjjjjjjjjjjjjjjjvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvdgtjjjjjhvhjdjgdjjydydgnvb</p></CTableDataCell>
                <CTableDataCell><img width={150}  height={150} src={img} /></CTableDataCell>
                <CTableDataCell align=''>
                  <a><i className="fa fa-edit ms-2 editicon"></i></a> 
                  <a><i className="fa fa-trash-o ms-3 deleteicon"></i></a></CTableDataCell>
                </CTableRow>
         {/* {
          productdata.map((blog , index) => {
            return <CTableRow active key={index} >
              <CTableDataCell >{blog.course_id}</CTableDataCell>
                <CTableDataCell>{blog.course_name}</CTableDataCell>
                
                
                <CTableDataCell><img width={100}  height={100} src={product.image}/></CTableDataCell>
                <CTableDataCell><i className="fa fa-edit"></i></CTableDataCell>

            </CTableRow>
          })
         } */}
        </CTableBody>
      </CTable>
      </>
  )
}

export default Allblog

