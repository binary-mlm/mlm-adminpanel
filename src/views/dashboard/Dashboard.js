/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
  CCardFooter,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
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
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
}, []);
const fetchData = async () => {
  try {
      const response = await axios.get('http://localhost:8000/api/v1/product');
      setData(response.data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

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
                <CTableHeaderCell scope="col">video</CTableHeaderCell>
                <CTableHeaderCell scope="col">Teacher name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Teacher dept</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
             
            {data.map((row, index) => (
                    <CTableRow active key={index}> 
                    <CTableDataCell scope="row">{row.course_id}</CTableDataCell>
                    <CTableDataCell>{row.course_name}</CTableDataCell>
                    <CTableDataCell>{row.course_review}</CTableDataCell>
                    <CTableDataCell>{row.total_video}</CTableDataCell>
                    <CTableDataCell>{row.teacher_name}</CTableDataCell>
                    
                    <CTableDataCell>{row.teacher_dept}</CTableDataCell>
                   
                    </CTableRow>
                   
                 ))} 
              {/* <CTableRow active>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Otto</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
             
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
                <CTableDataCell>@fat</CTableDataCell>
              </CTableRow> */}
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
