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
const Addproduct = () => {
    const [courseid, setCourseid] = useState('')
    const [course_name, setCoursename] = useState('')
    const [course_review, setCoursereview] = useState('')
    const [videos, setVideos] = useState('')
    const [teacher_name, setTeacher_name] = useState('')
    const [teacher_dept, setTeacher_dept] = useState('')
    
    //handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert("submit works")
        if (courseid === "" || course_name === "" || course_review === "" || teacher_name === "" || teacher_dept === "" || videos === "") {
            swal("Opps!", "Please fill out all required fields!", "error");
        }

        else {

            axios.post('http://localhost:8000/api/v1/product/new', { courseid, course_name, course_review, videos, teacher_name, teacher_dept  })
                .then(res => {
                    console.log(res);
                    swal("yeah", "Product sucessfully inserted!", "success");
                })
                .catch(err => {
                    console.log(err);
                    swal("Opps!", "Not inserted !", "error");

                })

        }

    }

    return (
        <>
            <CRow>
                <CCol xs={12} >
                    <CCard className="mb-4">
                        <CForm className='mt-4 ms-4 mb-3'>
                            <div className="mb-3">

                                <CFormLabel htmlFor="exampleFormControlInput1">CourseID<sup><i className="fa fa-asterisk" style={{fontSize:"9px"}}></i></sup></CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="exampleFormControlInput1"
                                    name="courseid"
                                    placeholder="Enter course id"
                                    onChange={e => setCourseid(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput2">Course name<sup><i className="fa fa-asterisk" style={{fontSize:"9px"}}></i></sup></CFormLabel>
                                <CFormInput type="text"
                                    id="exampleFormControlInput2"
                                    name='course_name'
                                    placeholder="Enter course name"
                                    onChange={e => setCoursename(e.target.value)}
                                />

                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput3">Course review<sup><i className="fa fa-asterisk" style={{fontSize:"9px"}}></i></sup></CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='course_review'
                                    id="exampleFormControlInput3"
                                    placeholder="Enter course review out of 5"
                                    onChange={e => setCoursereview(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput6">Total Video<sup><i className="fa fa-asterisk" style={{fontSize:"9px"}}></i></sup></CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='videos'
                                    id="exampleFormControlInput6"
                                    placeholder="Enter total video"
                                    onChange={e => setVideos(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput4">Teachers name<sup><i className="fa fa-asterisk" style={{fontSize:"9px"}}></i></sup></CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='teacher_name'
                                    id="exampleFormControlInput4"
                                    placeholder="Enter Teacher name"
                                    onChange={e => setTeacher_name(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput5">Teachers dept<sup><i className="fa fa-asterisk" style={{fontSize:"9px"}}></i></sup></CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='teacher_dept'
                                    id="exampleFormControlInput5"
                                    placeholder="Enter Teacher's dept"
                                    onChange={e => setTeacher_dept(e.target.value)}
                                />
                            </div>
                           
                            <div className='text-center'>
                                <CButton as="input" className='btn w-25' type="submit" color="primary" value="Submit"  onClick={handleSubmit} />
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
