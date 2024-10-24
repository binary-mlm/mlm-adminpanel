import React,{ useState, useEffect } from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import axios from 'axios';
const Viewfanchise = () => {
   
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [fanchisedata, setfanchisedata] = useState([])
    useEffect(() =>{
        axios.get(ROOT_URL+'/api/admin/getAllFranchies')
        .then(userdata => setfanchisedata(userdata.data))
        .catch((err) => {
            console.log(err);
        });
    
       
    }, []);
  return (
   <>
    <div className='fw-bold'>
                <div className='row'>
                    <div className='col'>
                    <h3>All fanchise member</h3>
                    </div>
                </div>
                </div>
                <CTable  responsive="sm" color="dark" className='mt-2'>
                <CTableHead align="middle">
                    <CTableRow  >
                        <CTableHeaderCell scope="col" className='col-2' >Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Fanchise_id</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Email</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-2'>Phone number</CTableHeaderCell>
                        
                       
                    </CTableRow>
                </CTableHead>
                <CTableBody align="middle" >
                {
                    fanchisedata.map((user , index) => {
                return <CTableRow active key={index} >
                  <CTableDataCell >{user.franchiseName}</CTableDataCell>
                    <CTableDataCell>{user.franchiseId}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>{user.contactInfo}</CTableDataCell>
                  
                       

                </CTableRow>
              })
             }       
                </CTableBody>
            </CTable>
   </>
  )
}

export default Viewfanchise