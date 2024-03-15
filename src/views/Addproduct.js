import React from 'react'

import {
    CCardFooter,
    CCard,

    CFormInput,
    CCol,
    CRow,
    CForm,
    CFormLabel,
    CButton,

} from '@coreui/react'

const Addproduct = () => {
    return (
        <>
            <CRow>
                <CCol xs={12} >
                    <CCard className="mb-4">
                        <CForm className='mt-4 ms-4 mb-3'>
                            <div className="mb-3">

                                <CFormLabel htmlFor="exampleFormControlInput1">CourseID</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="exampleFormControlInput1"
                                    name="courseid"
                                    placeholder="Enter course id"
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput2">Course name</CFormLabel>
                                <CFormInput type="text"
                                    id="exampleFormControlInput2"
                                    name='course_name'
                                    placeholder="Enter course name"
                                />

                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput3">Course review</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='course_review'
                                    id="exampleFormControlInput3"
                                    placeholder="Enter course review"
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput4">Teacher's name</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='teacher_name'
                                    id="exampleFormControlInput4"
                                    placeholder="Enter course id"
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput5">Teacher's dept</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='teacher_dept'
                                    id="exampleFormControlInput5"
                                    placeholder="Enter course id"
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput5">Total Video</CFormLabel>
                                <CFormInput
                                    type="number"
                                    name='videos'
                                    id="exampleFormControlInput5"
                                    placeholder="Enter course id"
                                />
                            </div>
                            <div className='text-center'>
                            <CButton  as="input"className='btn w-25' type="submit" color="primary" value="Submit" />
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
