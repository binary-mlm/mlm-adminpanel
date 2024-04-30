/* eslint-disable prettier/prettier */
import { useState, React } from 'react';
import {
    CCard,
    CFormInput,
    CCol,
    CRow,
    CForm,
    CFormLabel,
    CFormTextarea,
    CFormCheck, CButton
} from '@coreui/react';
import { Link } from 'react-router-dom';
const Addchapter = () => {
    const [videotitle, setvideotitle] = useState('');
    return (
        <>
            <CRow>
                <CCol xs={12} >
                    <Link className="linkto text-decoration-none" to="/addsection"><div className='d-flex mt-1'><i className="fa fa-arrow-left mt-1" style={{ fontSize: "15px" }}></i><span className='ms-2 fw-bold'>Back to Section setup</span></div></Link>
                    <div className=' fw-bold mt-2 mb-3' style={{ fontSize: "25px" }}>Chapter creation</div>
                    <CCard className="mb-4 cardform">
                        <CForm className='mt-4 ms-4 mb-3' method="post" encType="multipart/form-data">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput1">Video title<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2  me-3 fw-bold'>Edit title</span></div>
                                        </div>

                                        <CFormInput
                                            type="text"
                                            id="exampleFormControlInput1"
                                            name="videotitle"
                                            placeholder="Enter video title"
                                            onChange={e => setvideotitle(e.target.value)}
                                        />

                                    </div>

                                </div>
                                <div className='col-lg-6'>
                                     <div className="mb-3">
                                        
                                                <CFormLabel htmlFor="exampleFormControlInput1">Video link<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="exampleFormControlInput1"
                                            name="videolink"
                                            placeholder="Enter video link"
                                            onChange={e => setvideolink(e.target.value)}
                                        />

                                    </div>

                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <CButton as="input" className='btn w-25' type="submit" color="primary" value="Save"  />
                            </div>
                        </CForm>
                    </CCard>
                </CCol>
            </CRow>

        </>

    )
}

export default Addchapter