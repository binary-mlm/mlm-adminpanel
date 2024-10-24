/* eslint-disable prettier/prettiesweetalertr */
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

// import WidgetsDropdown from '../widgets/WidgetsDropdown'
// import MainChart from './MainChart'

const Dashboard = () => {
  const token = sessionStorage.getItem("admintoken");
  const navigate = useNavigate();
  const [productdata, setproductdata] = useState([])
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

 
  
  // console.log(ROOT_URL)

  useEffect(() => {
    axios.get(ROOT_URL+'/api/admin/viewProducts',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
  })
    
    .then((productdata) =>{
      setproductdata(productdata.data.products);
      console.log(productdata.data.products);
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
    await axios.delete(ROOT_URL+`/api/admin/deleteProduct/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      })
    swal("Deleted!", "product has been deleted.", "success");
    window.location.reload();
  } catch (error) {
    swal("Error!", "Failed to delete the product.", "error");
    console.error('Error deleting product', error);
  }
};
const confirmDelete = (productid) => {
  console.log("product ID to be deleted:", productid); 
  
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this product!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      handleDelete(productid);
    } else {
      swal("Your product is safe!");
    }
  });
};

  return (
    <>
      {/* <WidgetsDropdown className="mb-4" /> */}
      
        <CCardHeader>
          <h5 className='text-center mb-2'>All Products</h5>
        </CCardHeader>
        <CCardBody>
          <CTable responsive="sm" color="dark">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Product_id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Product name</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Review</CTableHeaderCell> */}
                <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                <CTableHeaderCell scope="col">bvPoints</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Teacher dept</CTableHeaderCell> */}
                <CTableHeaderCell scope="col">Stock</CTableHeaderCell>
                <CTableHeaderCell scope="col">Product description</CTableHeaderCell>
                <CTableHeaderCell scope="col">Product image </CTableHeaderCell>
                <CTableHeaderCell scope="col" className='text-center'>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
             {
              productdata.map((product) => {
                return <CTableRow active key={product._id} >
                  <CTableDataCell id='courseid'>{product._id}</CTableDataCell>
                    <CTableDataCell>{product.name}</CTableDataCell>
                    {/* <CTableDataCell>{product.course_review}</CTableDataCell> */}
                    <CTableDataCell>{product.price}</CTableDataCell>
                    <CTableDataCell>{product.bvPoints}</CTableDataCell>
                    
                    {/* <CTableDataCell>{product.teacher_dept}</CTableDataCell> */}
                    <CTableDataCell>{product.stock}</CTableDataCell>
                    <CTableDataCell  dangerouslySetInnerHTML={{
                    __html: product.description
                  }}></CTableDataCell>
                    <CTableDataCell><img width={100} height={100} src={product.imageURL}/></CTableDataCell>
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
