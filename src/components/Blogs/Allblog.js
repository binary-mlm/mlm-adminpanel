/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react'

import {
    CTable,
    CTableBody, 
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'
  import axios from 'axios';
  import {Link } from 'react-router-dom'
  import swal from 'sweetalert'

const Allblog = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [blog , setBlog] = useState([]);
   
    useEffect(() =>{
      axios.get(ROOT_URL+'/api/v1/get_blog')
      .then(blog =>{
        
        setBlog(blog.data.data);
      } )
      .catch(err => console.log(err))
     
  }, []);
  const handleDelete = async (id) => {
    try { 
      await axios.delete(ROOT_URL+`/api/v1/deleteblog/${id}`);
      swal("Deleted!", "blog has been deleted.", "success");
      window.location.reload();
    } catch (error) {
      swal("Error!", "Failed to delete the blog.", "error");
      console.error('Error deleting course', error);
    }
  };
  const confirmDelete_blog = (blogId) => {
    console.log("Blog ID to be deleted:", blogId); 
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this blog!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(blogId);
      } else {
        swal("Your blog is safe!");
      }
    });
  };
 
  return (
    <>
    <div className='fw-bold'>
        <h3>All Blogs:-</h3></div> 
        <CTable responsive="sm" color="dark">
        <CTableHead align="middle">
          <CTableRow  >
          <CTableHeaderCell scope="col" className='col-1' >Blog title</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-2' >Blog title</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-6'>Blog Short Desdription</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col" className='col-3'>Blog ShortDesdription</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='col-2'>Blog image</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='col-1'>Blog Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody align="middle">
         {
          blog.map((blog) => {
            return <CTableRow active key={blog._id}>
            <CTableDataCell id='blogid'>{blog._id}</CTableDataCell>
              <CTableDataCell >{blog.blogtitle}</CTableDataCell>
                <CTableDataCell  dangerouslySetInnerHTML={{
                    __html: blog.shortdescription
                  }}></CTableDataCell>
                
                
                <CTableDataCell><img width={100}  height={100} src={blog.image}/></CTableDataCell>
                <CTableDataCell className='col-2'>
                <div className='d-flex justify-content-center'>
                
               <Link to= {`/editblog/${blog._id}`}><i className=" mt-2 fa fa-edit  editicon"></i></Link>
               <button className="btn" onClick={()=>confirmDelete_blog(blog._id)}><i className="fa fa-trash-o editicon"></i></button>

              </div></CTableDataCell>
            </CTableRow>
          })
         }
        </CTableBody>
      </CTable>
      </>
  )
}

export default Allblog

