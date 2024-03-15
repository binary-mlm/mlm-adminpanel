import React from 'react'

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
                <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow active>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Otto</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
                <CTableDataCell>@fat</CTableDataCell>
              </CTableRow>
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
