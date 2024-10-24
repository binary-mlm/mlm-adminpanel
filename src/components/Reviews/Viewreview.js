import React,{useState,useEffect} from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { useMemo } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const Viewreview = () => {
    const { id } = useParams();
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
 
    const [reviewdata, setReviewdata] = useState([]);
    const handleDelete = async (id,reviewownerid) => {
        try {
            console.log(reviewownerid);
          // const id = document.getElementById('courseid').innerHTML;
          // console.log(id);
         await axios.delete(ROOT_URL+`/api/v1/deletereview/${id}/${reviewownerid}`);
          swal("Deleted!", "Course has been deleted.", "success");
          window.location.reload();
        } catch (error) {
          swal("Error!", error.message, "error");
          console.error('Error deleting course', error);
        }
      };
    const confirmDelete = (review_owner_id) => {
        // console.log("course ID to be deleted:", reviewid); 
        
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this review!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            handleDelete(review_owner_id);
          } else {
            swal("review is not deleted!");
          }
        });
      };
    useEffect(() =>{
        if (!reviewdata.length) {
        // axios.get(ROOT_URL+'/api/v2/getallcontact')
        axios.get(ROOT_URL+`/api/v1/showreviews/${id}`)
        .then(reviewdata => { setReviewdata(reviewdata.data.reviews)
            
     })
    
        .catch((err) => {
            console.log(err);
        });
    }  
    }, [reviewdata]);
    const memoizedreviewData = useMemo(() => reviewdata, [reviewdata]);
  return (
  <>
    <CTable  responsive="sm" color="dark" className='mt-2'>
                <CTableHead align="middle">
                    <CTableRow  >
                        <CTableHeaderCell scope="col" className='col-3' >User Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-3'>Rating</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-4'>Comment</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='col-2 text-center'>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody align="middle" >
                {
                    memoizedreviewData.map((review) => {
                return <CTableRow active key={review._id} >
               
                  <CTableDataCell >{review.username}</CTableDataCell>
                  <CTableDataCell >{review.rating}</CTableDataCell>
                  <CTableDataCell >{review.comment}</CTableDataCell>
                  <CTableDataCell><button className='btn' onClick={()=>confirmDelete(review.user_id)}><i className='fa fa-trash-o'></i></button></CTableDataCell>
                  
                </CTableRow>
              })
             }       
                </CTableBody>
            </CTable>

  </>
  )
}


export default Viewreview