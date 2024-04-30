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
    CFormCheck,CButton
} from '@coreui/react';
import { Link } from 'react-router-dom';
import uploadpic from '../Image/upload.png';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Addsection = () => {
    const [sectiontitle, setsectiontitle] = useState('');
    const [chapterdescription, Setchapterdescription] = useState('');
    // const [video_file, Setvideofile] = useState([])

    const [videolink,setvideolink] = useState('');
    const [videotitle, setvideotitle] =useState('');

    // const convertToBase64 = (file) => {
    //     // console.log(file);
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     const data = new Promise((resolve, reject) => {
    //         reader.onload = () => resolve(reader.result)
    //         reader.onerror = (err) => {
    //             reject(err)
    //         }
    //     })
    //     return data;
    // }


    // const handlevideo = async (e) => {
    //  Setvideofile([...e.target.files]);
    //     const video_file = await convertToBase64(file)
    //     Setvideofile(video_file);
    //     console.log(video_file)
    // }
    return (
        <>
            <CRow>
                <CCol xs={12} >
                    <Link className="linkto text-decoration-none" to="/Addproduct"><div className='d-flex mt-2'><i className="fa fa-arrow-left  mt-1"></i><span className='ms-2 fw-bold'>Back to Course setup</span></div></Link>
                    <div className=' fw-bold mt-2 mb-3' style={{ fontSize: "25px" }}>Section creation</div>
                    <CCard className="mb-4 cardform">
                        <CForm className='mt-4 ms-4 mb-3' method="post" encType="multipart/form-data">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput1">Section title<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2  me-3 fw-bold'>Edit  title</span></div>
                                        </div>

                                        <CFormInput
                                            type="text"
                                            id="exampleFormControlInput1"
                                            name="sectiontitle"
                                            placeholder="Enter Section title"
                                            onChange={e => setsectiontitle(e.target.value)}
                                        />

                                    </div>
                                    
                                    {/* <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlTextarea1">Chapter description<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2  me-3 fw-bold'>Edit description</span></div>
                                        </div>

                                       
                                         <ReactQuill
                                            theme="snow" // Specify theme 
                                            name="chapterdescription" // Set editor content
                                            value={chapterdescription}
                                            onChange={(value) => Setchapterdescription(value)}
                                        />
                                        

                                    </div> */}
                                    {/* <div>
                                        <h5>Access Settings</h5>
                                    </div>
                                    <div>
                                    <CFormLabel htmlFor="flexCheckDefault">Free Preview chapter<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                    <CFormCheck id="flexCheckDefault" label="Check this box if you want to make this chapter  free for preview"/>
                                    </div> */}


                                </div>
                                <div className='col-lg-6'>
                                <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <CFormLabel htmlFor="exampleFormControlInput6">Chapters<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><Link to='/addchapter' className='text-decoration-none'><span className='ms-2 fw-bold me-3'>Add Chapter</span></Link></div>
                                        </div>
                                        <ul className='border me-3 border_ul'>
                                            <li>Introduction</li>
                                            <li>Introduction</li>
                                            <li>Introduction</li>
                                        </ul>
                                    </div>
                                {/* <div className="mb-3">
                                           <CFormLabel htmlFor="exampleFormControlInput1">Video title<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                          

                                        <CFormInput
                                            type="text"
                                            id="exampleFormControlInput1"
                                            name="chaptertitle"
                                            placeholder="Enter video title"
                                            onChange={e => setvideotitle(e.target.value)}
                                        />

                                    </div> */}
                                {/* <div className="mb-3">
                                        
                                                <CFormLabel htmlFor="exampleFormControlInput1">Video link<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="exampleFormControlInput1"
                                            name="chaptertitle"
                                            placeholder="Enter video link"
                                            onChange={e => setvideolink(e.target.value)}
                                        />

                                    </div> */}
                                    
                                    {/* <div className="mb-3">

                                        <CFormLabel htmlFor="exampleFormControlInput7">Chapter Video<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                        <CFormInput
                                            type="file"
                                            name='video_file'
                                            id="exampleFormControlInput7"
                                            accept="video/*"
                                            multiple 
                                            onChange={handlevideo}
                                        />
                                    </div> */}
                                    {/* <div className='text-center' >
                                        {video_file ? <video controls width={500} height={350}>
                                            <source src={video_file} type="video/mp4" />

                                        </video> : <img width={150} height={150} src={uploadpic} />}

                                    </div> */}

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
export default Addsection