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
// import { DocsExample } from 'src/components'
// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
// import MainChart from './MainChart'

const Dashboard = () => {
  const [productdata, setproductdata] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/product')
    .then(productdata => setproductdata(productdata.data.data))
    .catch(err => console.log(err))
   
}, []);


  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardHeader>
          <strong>All Products</strong>
        </CCardHeader>
        <CCardBody>
          <CTable color="dark">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Course_id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Course name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Review</CTableHeaderCell>
                <CTableHeaderCell scope="col">Total video</CTableHeaderCell>
                <CTableHeaderCell scope="col">Teacher name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Teacher dept</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
             {
              productdata.map((product , index) => {
                return <CTableRow active key={index} >
                  <CTableDataCell >{product.course_id}</CTableDataCell>
                    <CTableDataCell>{product.course_name}</CTableDataCell>
                    <CTableDataCell>{product.course_review}</CTableDataCell>
                    <CTableDataCell>{product.total_video}</CTableDataCell>
                    <CTableDataCell>{product.teacher_name}</CTableDataCell>
                    
                    <CTableDataCell>{product.teacher_dept}</CTableDataCell>

                </CTableRow>
              })
             }
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      <CRow> </CRow>
      <CCardFooter></CCardFooter>
    </>
  )
}

export default Dashboard
