import React ,{ useState, useEffect } from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import axios from 'axios';
const Contactus = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [contactdata, setContactdata] = useState([])
    useEffect(() =>{
       
        // axios.get(ROOT_URL+'/api/v2/getallcontact')
        axios.get('http://localhost:3000/api/v2/getallcontact')
        .then(contactdata => setContactdata(contactdata.data.data))
        .catch((err) => {
            console.log(err);
           
        });
       
    }, []);
  return (
  <>
    <div className='fw-bold'>
                <div className='row'>
                    <div className='col'>
                    <h3>All Users</h3>
                    </div>
                </div>
                </div>
                <CTable  responsive="sm" color="dark" className='mt-2'>
                <CTableHead align="middle">
                    <CTableRow  >
                        <CTableHeaderCell scope="col" className='col-2' >Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Email</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Message</CTableHeaderCell>
                       
                        
                    </CTableRow>
                </CTableHead>
                <CTableBody align="middle" >
                {
                    contactdata.map((user , index) => {
                return <CTableRow active key={index} >
                  <CTableDataCell >{user.name}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>{user.message}</CTableDataCell>
                  
                </CTableRow>
              })
             }       
                </CTableBody>
            </CTable>
  </>
  )
}

export default Contactus