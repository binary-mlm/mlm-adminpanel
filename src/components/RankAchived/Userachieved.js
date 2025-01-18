import React from 'react'
import { CButton , CTable , CTableBody, CTableDataCell , CTableHead, CTableRow, CTableHeaderCell} from '@coreui/react'
function Userachieved() {
  return (
  <>
   < div className="table-container table-responsive">
              <CTable>
                <CTableHead>
                  <CTableRow>
                   
                    <CTableHeaderCell>User name</CTableHeaderCell>
                    {/* <CTableHeaderCell>VB Matching</CTableHeaderCell> */}
                    <CTableHeaderCell>User id</CTableHeaderCell>
                    <CTableHeaderCell>User Email</CTableHeaderCell>
                    <CTableHeaderCell>User Phone number</CTableHeaderCell>
                  
                    <CTableHeaderCell >Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody></CTableBody>
                </CTable>
                </div>

  </>
  )
}

export default Userachieved