import React ,{useState,useEffect}from 'react'
import { Sidebar } from './Sidebar'
import axios from 'axios'
import {
  CCardFooter,
  CCard,
  CCardBody,
  CCardHeader,
  CTableDataCell,
  CRow,
  CTable,
  CTableBody,
  
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
const Alluser = () => {
  const [userdata, setuserdata] = useState([])
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const teacherid = sessionStorage.getItem('teacherid');
  useEffect(() => {
    axios.get(ROOT_URL+`/api/auth/getuserbyteacherid/${teacherid}`)
    
    .then((userdata) =>{
      setuserdata(userdata.data);
       console.log(userdata.data);
    } )
    .catch((err) =>{
       console.log(err)
        
     }
    )
     
}, []);
  return (
    <div>
    <Sidebar />
    <div className="body flex-grow-1">
    <CCardHeader>
          <h3>Total User</h3>
        </CCardHeader>
        <CCardBody>
          <CTable responsive="sm" color="dark">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col-2">User name</CTableHeaderCell>
                <CTableHeaderCell scope="col-4">User Address</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Review</CTableHeaderCell> */}
                <CTableHeaderCell scope="col-2">Course Name</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Teacher dept</CTableHeaderCell> */}
                <CTableHeaderCell scope="col-2">User phoneno</CTableHeaderCell>
               
               
              </CTableRow>
            </CTableHead>
            <CTableBody>
             {
              userdata.map((user) => {
                return <CTableRow active key={user._id} >
                  <CTableDataCell id='courseid'>{user.fullname}</CTableDataCell>
                    <CTableDataCell>{user.city}, {user.state}</CTableDataCell>
                    
                    <CTableDataCell>{user.courses}</CTableDataCell>
                   
                  
                    <CTableDataCell>{user.phoneno}</CTableDataCell>
                    
                   

                </CTableRow>
              })
             }
             </CTableBody>
            
          </CTable>
        </CCardBody>


    </div>
    </div>
  )
}

export default Alluser