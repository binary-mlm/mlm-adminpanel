import {React,useState, useEffect} from 'react'
import { CCard, CFormInput, CCol, CRow, CForm, CImage, CFormLabel, CButton, CCardImage } from '@coreui/react'
import { Link ,useParams } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const Editblog = () => {
    const { id } = useParams();
    console.log(id);
    const [image , setimage] = useState('');
    const [big_description, setBigDescription] = useState('');
    const [short_description, setShortDescription] = useState('');
    const [blog, setBlog] = useState({
        blogtitle: '',
        blogdescription: '',
        shortdescription: '',
        image: '',
    });

    useEffect(() => {
        const fetchCourse = async () => {
            const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
          try {
            const response = await axios.get( ROOT_URL +`/api/v1/get_blog/${id}`)
            console.log(response.data);
            setBlog(response.data);
            setBigDescription(response.data.blogdescription);
            setShortDescription(response.data.shortdescription);
          } catch (error) {
            console.error('Error fetching course data', error);
          }
        };
    
        fetchCourse();
      }, [id]);

//handlechange
const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedblog = { ...blog};

    
    updatedblog[name] = value;
    
    console.log('Updated Course:', updatedblog);
    setBlog(updatedblog);
  };


  //for image
const convertToBase64 = (file) => {
    // console.log(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    const data = new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result)
      reader.onerror = (err) => {
        reject(err)
      }
    })
    return data
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    const image = await convertToBase64(file);
    setimage(image)
    console.log(image)
    setBlog((prevblog) => ({ ...prevblog, image: image }));
    
  }
  const imageOnChangeHandler = (e) => {
    handleFileChange(e);
    handleChange();
  };
  const handleBigDescriptionChange = (value) => {
    setBigDescription(value);
    setBlog((prevblog) => ({ ...prevblog, blogdescription: value }));
    
  };
  const handleshortDescriptionChange = (value) => {
    setShortDescription(value);
    setBlog((prevblog) => ({ ...prevblog, shortdescription: value }));
    
  };


  const editcourse = async () => {
    try {
      //  alert("submit")
        const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
        const updatedBlog = { ...blog, blogdescription: big_description,shortdescription: short_description}; 
        const response = await axios.put(ROOT_URL +`/api/v1/editblog/${id}`, updatedBlog,image);
      
        console.log(response)
        
     swal("wow!","Blog details updated successfully!","success")
     
    
   } catch (error) {
      swal("Opps!", "not updated!", "error");
      console.error('Error updating course', error);
    }
  };
  const confirmEdit = () => {
    swal({
      title: "Are you sure?",
      text: "Do you want to edit this Blog?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willedit) => {
      if (willedit) {
        editcourse();
      } else {
        swal("Your course is not edit!");
      }
    });
  };

  return (
    <>
        <CRow>
      <CCol xs={12}>
        <Link className="linkto" to="/allblog">
          <div className="d-flex mt-2">
            <i className="fa fa-arrow-left  mt-1"></i>
            <span className="ms-2 fw-bold">Back to Blogs</span>
          </div>
        </Link>

        <div className=" fw-bold mt-2 mb-3" style={{ fontSize: '25px' }}>
          Blog Information
        </div>
        <CCard className="mb-4 cardform">
          <CForm className="mt-4 ms-4 mb-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Blog Title</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput1" name='blogtitle' value={blog.blogtitle}
                   onChange={handleChange}  />
                </div>
                
                    <div className='mb-3'>
                <CFormLabel htmlFor="exampleFormControlInput3">Blog Description</CFormLabel>
                <ReactQuill
                      theme="snow" // Specify theme
                      name="blogdescription" // Set editor content
                     value={big_description }
                      onChange={handleBigDescriptionChange}
                      
                    />
                    </div>
                  
                </div>
                <div className="col-lg-6">
                <div className='mb-3'>
                <CFormLabel htmlFor="exampleFormControlInput3">Blog short Description</CFormLabel>
                <ReactQuill
                      theme="snow" // Specify theme
                      name="shortdescription" // Set editor content
                      value={short_description}
                      onChange={handleshortDescriptionChange}
                      
                    />
                    </div>
                    <div className="mb-3 ">
                  <CFormLabel htmlFor="exampleFormControlInput5">Image</CFormLabel>
                  <div>
                  <CFormInput
                    type="file"
                    name="image"
                    id="exampleFormControlInput5"
                    accept="image/*"

                    onChange={imageOnChangeHandler}
                  />
                  <div className=" mt-2">
                  {blog.image ? (
                    <img width={400} height={300} src={blog.image} />
                  ) : (
                    <img width={150} height={150} src={image} />
                  )}
                </div>
                    
                  </div>
                </div>

                </div>
                </div>
                <div className="text-center">
              <CButton
                as="input"
                className="btn w-25"
                color="primary"
                value="Update"
                onClick={confirmEdit}/>
                </div>
                
              
                </CForm>
                </CCard>
        </CCol>
        

        </CRow>
    </>
  )
}


  

export default Editblog