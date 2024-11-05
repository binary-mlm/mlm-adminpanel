import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CFormLabel,
  CFormInput
  
} from '@coreui/react'
const UserInventory = () => {
  return (
   <>
       <div className="d-flex justify-content-center text-center">
          <CFormLabel className="mt-1" htmlFor="searchFranchise">
            Enter Sponsor ID:
          </CFormLabel>
          <div className="d-flex justify-content-center text-center flex-column">
            <CFormInput
              className="ms-3"
              id="searchFranchise"
           
              // onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="User sponsor ID..."
            />
          </div>
        </div>
   </>
  )
}

export default UserInventory