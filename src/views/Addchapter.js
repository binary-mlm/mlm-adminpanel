/* eslint-disable prettier/prettier */
import { useState, React } from 'react';

import {
    CCardFooter,
    CCard,
    CFormInput,
    CCol,
    CRow,
    CForm,
    CFormLabel,
    CFormTextarea,
    CFormCheck
} from '@coreui/react';
import { Link } from 'react-router-dom';
import uploadpic from '../Image/upload.png';


const Addchapter = () => {
    const [chaptertitle, Setchaptertitle] = useState('');
    const [chapterdescription, Setchapterdescription] = useState('');
    const [video_file, Setvideofile] = useState(null)


    const convertToBase64 = (file) => {
        // console.log(file);
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


    const handlevideo = async (e) => {
        const file = e.target.files[0];
        const video_file = await convertToBase64(file)
        Setvideofile(video_file);
        console.log(video_file)
    }
    return (
        <>
            <CRow>
                <CCol xs={12} >
                    <Link className="linkto" to="/Addproduct"><div className='d-flex mt-2'><i className="fa fa-arrow-left  mt-1"></i><span className='ms-2 fw-bold'>Back to Course setup</span></div></Link>
                    <div className=' fw-bold mt-2 mb-3' style={{ fontSize: "25px" }}>Chapter creation</div>
                    <CCard className="mb-4 cardform">
                        <CForm className='mt-4 ms-4 mb-3' method="post" encType="multipart/form-data">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput1">Chapter title<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2  me-3 fw-bold'>Edit  title</span></div>
                                        </div>

                                        <CFormInput
                                            type="text"
                                            id="exampleFormControlInput1"
                                            name="chaptertitle"
                                            placeholder="Enter course title"
                                            onChange={e => Setchaptertitle(e.target.value)}
                                        />

                                    </div>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlTextarea1">Chapter description<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2  me-3 fw-bold'>Edit description</span></div>
                                        </div>

                                        <CFormTextarea
                                            id="exampleFormControlTextarea1"
                                            
                                            rows={3}
                                            text="Must be 8-20 words long."
                                            name='chapterdescription'
                                            onChange={e => Setchapterdescription(e.target.value)}

                                        ></CFormTextarea>
                                        

                                    </div>
                                    <div>
                                        <h5>Access Settings</h5>
                                    </div>
                                    <div>
                                    <CFormLabel htmlFor="flexCheckDefault">Free Preview chapter<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                    <CFormCheck id="flexCheckDefault" label="Check this box if you want to make this chapter  free for preview"/>
                                    </div>


                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-3">

                                        <CFormLabel htmlFor="exampleFormControlInput7">Chapter Video<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                        <CFormInput
                                            type="file"
                                            name='video_file'
                                            id="exampleFormControlInput7"
                                            accept="video/*"
                                            onChange={handlevideo}
                                        />
                                    </div>
                                    <div className='text-center' >
                                        {video_file ? <video controls width={500} height={350}>
                                            <source src={video_file} type="video/mp4" />

                                        </video> : <img width={150} height={150} src={uploadpic} />}

                                    </div>

                                </div>
                            </div>
                        </CForm>
                    </CCard>
                </CCol>
            </CRow>
        </>


    )
}
export default Addchapter