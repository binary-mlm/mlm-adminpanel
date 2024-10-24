import React ,{ useState, useEffect }from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import axios from 'axios';
import { useMemo } from 'react';
import {Link } from 'react-router-dom';
const Allreview = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    
     const [courses, setCoursedata] = useState([])
    
     useEffect(() =>{
        if (!courses.length) {
        // axios.get(ROOT_URL+'/api/v2/getallcontact')
        axios.get(ROOT_URL+'/api/v1/get_course')
        .then(coursedata => { setCoursedata(coursedata.data.data)
            
     })
       
        .catch((err) => {
            console.log(err);
        });
    }  
    }, [courses]);
    const memoizedProductData = useMemo(() => courses, [courses]);
  return (
   <>
    <div className='fw-bold'>
                <div className='row'>
                    <div className='col'>
                    <h3>All Users reviws</h3>
                    </div>
                </div>
                </div>
                <CTable  responsive="sm" color="dark" className='mt-2'>
                <CTableHead align="middle">
                    <CTableRow  >
                        <CTableHeaderCell scope="col" className='col-2' >Course_image</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Course name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Reviews</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='text-center'>View reviews</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody align="middle" >
                {
                    memoizedProductData.map((user , index) => {
                return <CTableRow active key={user._id} >
                <CTableDataCell><img src={user.image} width={300}/></CTableDataCell>
                  <CTableDataCell >{user.course_name}</CTableDataCell>
                  <CTableDataCell >{user.reviews.length}</CTableDataCell>
                  <CTableDataCell >
                  <Link to={`/viewreview/${user._id}`}> <i className='fa fa-eye'></i></Link>
                  </CTableDataCell>
                </CTableRow>
              })
             }       
                </CTableBody>
            </CTable>
   </>
  )
}

export default Allreview