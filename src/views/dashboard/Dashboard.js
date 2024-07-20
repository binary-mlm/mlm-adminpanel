/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
  CCardFooter,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
// import MainChart from './MainChart'

const Dashboard = () => {
  const [productdata, setproductdata] = useState([])
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  console.log(ROOT_URL)

  useEffect(() => {
    axios.get(ROOT_URL+'/api/v1/get_course')
    .then(productdata => setproductdata(productdata.data.data))
    .catch(err => console.log(err))
   
}, []);

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      
        <CCardHeader>
          <strong>All Products</strong>
        </CCardHeader>
        <CCardBody>
          <CTable responsive="sm" color="dark">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Course_id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Course name</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Review</CTableHeaderCell> */}
                <CTableHeaderCell scope="col">Total video</CTableHeaderCell>
                <CTableHeaderCell scope="col">Teacher name</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Teacher dept</CTableHeaderCell> */}
                <CTableHeaderCell scope="col">Course price</CTableHeaderCell>
                <CTableHeaderCell scope="col">Course image</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
             {
              productdata.map((product) => {
                return <CTableRow active key={product._id} >
                  <CTableDataCell >{product._id}</CTableDataCell>
                    <CTableDataCell>{product.course_name}</CTableDataCell>
                    {/* <CTableDataCell>{product.course_review}</CTableDataCell> */}
                    <CTableDataCell>{product.total_video}</CTableDataCell>
                    <CTableDataCell>{product.teacher_name}</CTableDataCell>
                    
                    {/* <CTableDataCell>{product.teacher_dept}</CTableDataCell> */}
                    <CTableDataCell>{product.course_price}</CTableDataCell>
                    <CTableDataCell><img width={100} height={100} src={product.image}/></CTableDataCell>

                </CTableRow>
              })
             }
            </CTableBody>
          </CTable>
        </CCardBody>
     
    
      <CCardFooter></CCardFooter>
    </>
  )
}

export default Dashboard
