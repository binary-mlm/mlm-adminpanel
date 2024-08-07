/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert'

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

import WidgetsDropdown from '../widgets/WidgetsDropdown'
// import MainChart from './MainChart'

const Dashboard = () => {
  const navigate = useNavigate();
  const [productdata, setproductdata] = useState([])
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  
  // console.log(ROOT_URL)

  useEffect(() => {
    axios.get(ROOT_URL+'/api/v1/get_course')
    
    .then((productdata) =>{
      setproductdata(productdata.data.data);
      console.log(productdata.data.data);
    } )
    .catch((err) =>{
       console.log(err)
        
     }
    )
     
}, []);



const handleDelete = async (id) => {
  try {
    // const id = document.getElementById('courseid').innerHTML;
    // console.log(id);
    await axios.delete(ROOT_URL+`/api/v1/deletecourse/${id}`);
    swal("Deleted!", "Course has been deleted.", "success");
    window.location.reload();
  } catch (error) {
    swal("Error!", "Failed to delete the course.", "error");
    console.error('Error deleting course', error);
  }
};
const confirmDelete = (productid) => {
  console.log("course ID to be deleted:", productid); 
  
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this course!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      handleDelete(productid);
    } else {
      swal("Your course is safe!");
    }
  });
};

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      
        <CCardHeader>
          <h5 className='text-center mb-2'>All Products</h5>
        </CCardHeader>
        <CCardBody>
          <CTable responsive="sm" color="dark">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Course_id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Course name</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Review</CTableHeaderCell> */}
                <CTableHeaderCell scope="col">Total video</CTableHeaderCell>
                <CTableHeaderCell scope="col">Teacher name</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Teacher dept</CTableHeaderCell> */}
                <CTableHeaderCell scope="col">Course price</CTableHeaderCell>
                <CTableHeaderCell scope="col">Course image</CTableHeaderCell>
                <CTableHeaderCell scope="col" className='text-center'>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
             {
              productdata.map((product) => {
                return <CTableRow active key={product._id} >
                  <CTableDataCell id='courseid'>{product._id}</CTableDataCell>
                    <CTableDataCell>{product.course_name}</CTableDataCell>
                    {/* <CTableDataCell>{product.course_review}</CTableDataCell> */}
                    <CTableDataCell>{product.total_video}</CTableDataCell>
                    <CTableDataCell>{product.teacher_name}</CTableDataCell>
                    
                    {/* <CTableDataCell>{product.teacher_dept}</CTableDataCell> */}
                    <CTableDataCell>{product.course_price}</CTableDataCell>
                    <CTableDataCell><img width={100} height={100} src={product.image}/></CTableDataCell>
                    <CTableDataCell className='col-1'>
                            <div className='d-flex'>
                            <Link to={`/editcourse/${product._id}`} className='mt-1'><i className="fa fa-edit ms-2 mt-1 editicon"></i></Link>
                            <button className="btn" onClick={()=>confirmDelete(product._id)}><i className="fa fa-trash-o editicon"></i></button>
                           {/* <button><i className="fa fa-trash-o ms-4 editicon"></i></button> */}
                            </div>
                            
                        </CTableDataCell>

                </CTableRow>
              })
             }
            </CTableBody>
          </CTable>
        </CCardBody>
     
    
      <CCardFooter></CCardFooter>
    </>
  )
}

export default Dashboard
