import React , { useState, useEffect }from 'react'
import {AppFooter, AppHeader } from '../components/index'
import { Sidebar } from '../components/Teacher/Sidebar'
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

const TeacherLayout = () => {
  const [coursedata, setcoursedata] = useState([])
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const teacherid = sessionStorage.getItem('teacherid');
  useEffect(() => {
    axios.get(ROOT_URL+`/api/v1/getcoursebyteacher/${teacherid}`)
    
    .then((coursedata) =>{
      setcoursedata(coursedata.data);
      // console.log(coursedata.data);
    } )
    .catch((err) =>{
       console.log(err)
        
     }
    )
     
}, []);
  return (
    <div>
    <Sidebar />
    <div className="wrapper d-flex flex-column min-vh-100">
      <AppHeader />
      <div className="body flex-grow-1">
      <CCardHeader>
          <h3>My Courses</h3>
        </CCardHeader>
        <CCardBody>
          <CTable responsive="sm" color="dark">
            <CTableHead>
              <CTableRow align='middle'>
                <CTableHeaderCell scope="col-2">Course_id</CTableHeaderCell>
                <CTableHeaderCell scope="col-4">Course name</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Review</CTableHeaderCell> */}
                <CTableHeaderCell scope="col-2">Total video</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Teacher dept</CTableHeaderCell> */}
                <CTableHeaderCell scope="col-2">Course price</CTableHeaderCell>
                <CTableHeaderCell scope="col-2">Course image</CTableHeaderCell>
               
              </CTableRow>
            </CTableHead>
            <CTableBody>
             {
              coursedata.map((course) => {
                return <CTableRow active key={course._id}  align='middle'>
                  <CTableDataCell  id='courseid'>{course._id}</CTableDataCell>
                    <CTableDataCell >{course.course_name}</CTableDataCell>
                    
                    <CTableDataCell>{course.total_video}</CTableDataCell>
                   
                  
                    <CTableDataCell>{course.course_price}</CTableDataCell>
                    <CTableDataCell><img width={100} height={100} src={course.image}/></CTableDataCell>
                   

                </CTableRow>
              })
             }
             </CTableBody>
            
          </CTable>
        </CCardBody>
      </div>
      <AppFooter />
    </div>
  </div>
  )
}

export default TeacherLayout