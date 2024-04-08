/* eslint-disable prettier/prettier */
import { useState, React } from 'react'
import {
    CCardFooter,
    CCard,
    CFormInput,
    CCol,
    CRow,
    CForm,
    CFormLabel,
    CButton
} from '@coreui/react'
import axios from 'axios';
import swal from 'sweetalert';
import uploadpic from '../Image/uploadimage.jpg';
const Addproduct = () => {
    const [courseid, setCourseid] = useState('')
    const [course_name, setCoursename] = useState('')
    const [course_description, setCourse_description] = useState('')
    const [course_review, setCoursereview] = useState('')
    const [videos, setVideos] = useState('')
    const [teacher_name, setTeacher_name] = useState('')
    const [teacher_dept, setTeacher_dept] = useState('')
    const [image, setImage] = useState(null)
    const [video_file, setchangeVideo] = useState(null)


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
    const convertToBase64_file = (videofile) => {
        console.log(videofile);
        const reader = new FileReader();
        reader.readAsDataURL(videofile);
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
        // console.log(image);
    };

    const handlevideo = async(e) => {
        const videofile = e.target.files[0];
        const changevideofile = await convertToBase64_file(videofile)
        setchangeVideo(changevideofile);
        console.log(changevideofile)
    }
    //handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        // alert("submit works")
        if (courseid === "" || course_name === "" || course_description === "" || course_review === "" || teacher_name === "" || teacher_dept === "" || videos === "" || image === "") {
            swal("Opps!", "Please fill out all required fields!", "error");
        }

        else {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/product/new', { courseid, course_name, course_description, course_review, videos, teacher_name, teacher_dept, image });
                console.log(response.data);
                swal("yeah", "Product sucessfully inserted!", "success");

            } catch (error) {
                console.error('Error uploading image:', error);
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
                    <CCard className="mb-4">
                        <CForm className='mt-4 ms-4 mb-3' method="post" encType="multipart/form-data">

                            <div className='row'>
                                <div className='col-lg-6'>


                                    <div className="mb-3">
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

                                    </div>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput2">Course title<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit title</span></div>
                                        </div>
                                        <CFormInput type="text"
                                            id="exampleFormControlInput2"
                                            name='course_title'
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
                                        <CFormInput type="text"
                                            id="exampleFormControlInput2"
                                            name='course_description'
                                            placeholder="Enter course description"
                                            onChange={e => setCourse_description(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
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
                                        {image ? <img width={400} height={300} src={image} /> : <img width={300} height={300} src={uploadpic} />}
                                    </div>


                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput6">Course chapters<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit chapter</span></div>
                                        </div>
                                        <ul className='border me-3 border_ul'>
                                            <li>Introduction</li>
                                            <li>Introduction</li>
                                            <li>Introduction</li>
                                        </ul>
                                    </div>
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
                                    <div className="mb-3">
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
                                    </div>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput6">Course price<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>

                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2 fw-bold me-3'>Edit price</span></div>
                                        </div>

                                        <CFormInput
                                            type="text"
                                            name='teacher_dept'
                                            id="exampleFormControlInput6"
                                            placeholder="Enter course price"
                                            onChange={e => setTeacher_dept(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">

                                        <CFormLabel htmlFor="exampleFormControlInput7">Course Video<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                        <CFormInput
                                            type="file"
                                            name='video'
                                            id="exampleFormControlInput7"
                                            accept="video/*"
                                            onChange={handlevideo}
                                        />
                                    </div>
                                    <div className='text-center' >
                                        {video_file ? <video controls  width={300} height={300}>
                                            <source src={video_file} type="video/mp4" />
                                            
                                        </video> : <img width={300} height={300} src={uploadpic} /> }
                                        
                                    </div>
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
