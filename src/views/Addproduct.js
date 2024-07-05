/* eslint-disable prettier/prettier */
import { useState, React } from 'react'
import {
    CCardFooter,
    CCard,
    CFormInput,
    CCol,
    CRow,
    CForm,
    CFormSelect,
    CFormLabel,
    CButton
} from '@coreui/react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import uploadpic from '../Image/uploadimage.png';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Addproduct = () => {
    // const [courseid, setCourseid] = useState('')
    const [course_name, setCoursename] = useState('')
    const [course_description, setCourse_description] = useState('')
    const [wewilllearn, setWewilllearn] = useState('')
    // const [course_review, setCoursereview] = useState('')
    const [videos, setVideos] = useState('')
    const [teacher_name, setTeacher_name] = useState('')
    // const [teacher_dept, setTeacher_dept] = useState('')
    const [course_price, setCourseprice] = useState('')
    const [course_change , setcoursechange ]= useState('')
    const [image, setImage] = useState(null)
    // const [file_resource, setFile] = useState(null)


    const convertToBase64 = (file) => {
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        const data = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result)
            reader.onerror = (err) => {
                reject(err)
            }
        })
        return data;
    }


    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const image = await convertToBase64(file)
        setImage(image);
        console.log(image);
    };
    const handlecoursechange = (event) => {

        setcoursechange(event.target.value);
    };

    // const handlefile_resurce = async (e) => {
    //     const file = e.target.files[0];
    //     const resorce_file = await convertToBase64(file)
    //     setFile(resorce_file);
    //     console.log(resorce_file)
    // }
    //handle submit
    const handleSubmit = async (event) => {
        
        console.log(course_description);

        // alert("submit works")
        if (course_name === "" || course_description === ""  || wewilllearn === "" || teacher_name === "" || videos  === "" || course_price  === "" || image === "") {
            swal("Opps!", "Please fill out all required fields!", "error");
        }

        else {
            event.preventDefault();
            try {
                await axios.post('http://localhost:3000/api/v1/course', {course_name, course_description, wewilllearn, videos, teacher_name,course_change, course_price, image })

                    .then(res => {
                        console.log(res);
                        swal("yeah", "Course is  sucessfully inserted!", "success");
                    })

            } catch (error) {
                console.error('Error:', error);
                swal("Opps!", "Not inserted !", "error");
            }
        };
        // console.log(image);
        // axios.post('http://localhost:8000/api/v1/product/new', { courseid, course_name, course_review, videos, teacher_name, teacher_dept, imageData })
        //     .then(res => {
        //         console.log(res);
        //         swal("yeah", "Product sucessfully inserted!", "success");
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         swal("Opps!", "Not inserted !", "error");

        //     })

    }



    return (
        <>
            <CRow>
                <CCol xs={12} >
                    <div className=' fw-bold mt-2 mb-3' style={{ fontSize: "25px" }}>Add new course </div>
                    <CCard className="mb-4 cardform">
                        <CForm className='mt-4 ms-4 mb-3' method="post" encType="multipart/form-data">

                            <div className='row'>
                                <div className='col-lg-6'>


                                    {/* <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput1">CourseID<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2  me-3 fw-bold'>Edit ID</span></div>
                                        </div>

                                        <CFormInput
                                            type="text"
                                            id="exampleFormControlInput1"
                                            name="courseid"
                                            placeholder="Enter course id"
                                            onChange={e => setCourseid(e.target.value)}
                                        />

                                    </div> */}
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput2">Course title<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit title</span></div>
                                        </div>
                                        <CFormInput type="text"
                                            id="exampleFormControlInput2"
                                            name='course_name'
                                            placeholder="Enter course title"
                                            onChange={e => setCoursename(e.target.value)}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput2">Course description<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>

                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit description</span></div>
                                        </div>
                                        
                                        <ReactQuill
                                            theme="snow" // Specify theme 
                                            name="course_description" // Set editor content
                                            value={course_description}
                                            onChange={(value) => setCourse_description(value)}

                                        />


                                    </div>

                                    {/* <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput3">Course review<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit review</span></div>
                                        </div>

                                        <CFormInput
                                            type="text"
                                            name='course_review'
                                            id="exampleFormControlInput3"
                                            placeholder="Enter course review out of 5"
                                            onChange={e => setCoursereview(e.target.value)}
                                        />
                                    </div> */}
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput3">What we will learn<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit </span></div>
                                        </div>
                                        <ReactQuill
                                            theme="snow" // Specify theme 
                                            name="wewilllearn" // Set editor content
                                            value={wewilllearn}
                                            onChange={(value) => setWewilllearn(value)}

                                        />
                                    </div>
                                    
                                    
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleFormControlInput5">course image<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                        <CFormInput
                                            type="file"
                                            name='image'
                                            id="exampleFormControlInput5"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />

                                    </div>
                                    <div className='text-center' >
                                        {image ? <img width={400} height={300} src={image} /> : <img width={150} height={150} src={uploadpic} />}
                                    </div>

                                </div>
                                <div className='col-lg-6'>
                                    {/* <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput6">Sections<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><Link to='/addsection' className='text-decoration-none'><span className='ms-2 fw-bold me-3'>Add section</span></Link></div>
                                        </div>
                                        <ul className='border me-3 border_ul'>
                                            <li>Introduction</li>
                                            <li>Introduction</li>
                                            <li>Introduction</li>
                                        </ul>
                                    </div> */}
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput4">Teachers name<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>

                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit total video</span></div>
                                        </div>
                                        <CFormInput
                                            type="text"
                                            name='teacher_name'
                                            id="exampleFormControlInput4"
                                            placeholder="Enter Teacher name"
                                            onChange={e => setTeacher_name(e.target.value)}
                                        />
                                    </div>
                                    {/* <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput5">Teachers dept<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>

                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit dept</span></div>
                                        </div>
                                        <CFormInput
                                            type="text"
                                            name='teacher_dept'
                                            id="exampleFormControlInput5"
                                            placeholder="Enter Teacher's dept"
                                            onChange={e => setTeacher_dept(e.target.value)}
                                        />
                                    </div> */}
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput6">Course price<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit price</span></div>
                                        </div>
                                        <CFormInput
                                            type="text"
                                            name='course_price'
                                            id="exampleFormControlInput6"
                                            placeholder="Enter course price"
                                            onChange={e => setCourseprice(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleFormControlInput6">Course category<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                        <CFormSelect className=" me-2" onChange={handlecoursechange} aria-label="Default select example">
                                            <option>Select one category</option>
                                            <option value="music">Music</option>
                                            <option value="blockchain">Blockchain</option>
                                            <option value="python">Python</option>
                                        </CFormSelect>
                                    </div>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput6">Total Video<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit total video</span></div>
                                        </div>
                                        <CFormInput
                                            type="text"
                                            name='videos'
                                            id="exampleFormControlInput6"
                                            placeholder="Enter total video"
                                            onChange={e => setVideos(e.target.value)}
                                        />
                                    </div>
                                    {/* <div className="mb-3">

                                        <CFormLabel htmlFor="exampleFormControlInput7">Resources & Attachments</CFormLabel>
                                        <CFormInput
                                            type="file"
                                            name='file_resource'
                                            id="exampleFormControlInput7"
                                        />
                                        <div className='text-center mt-2' >
                                            {file_resource ? <video

                                                src={file_resource}
                                                width="500"
                                                height="400"
                                            /> : <img width={150} height={150} src={uploadpic} />}
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className='text-center'>
                                <CButton as="input" className='btn w-25' type="submit" color="primary" value="Submit" onClick={handleSubmit} />
                            </div>
                        </CForm>
                    </CCard>
                </CCol>
            </CRow>
            <CCardFooter></CCardFooter>
        </>
    )
}
export default Addproduct
