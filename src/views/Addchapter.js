/* eslint-disable prettier/prettier */
import { useState, React,useEffect } from 'react';
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

import PropTypes from 'prop-types';
const Addchapter = ({chapter, onChapterChange, sectionIndex,chapterIndex}) => {
    const [chapterData, setChapterData] = useState({ chapter_name: chapter.chapter_name || '',
        content: chapter.content || '',});
    useEffect(() => {
        // console.log('Received chapter prop:', chapter);
        setChapterData({chapter_name: chapter.chapter_name || '',
      Video_link: chapter.Video_link || '',});
      }, [chapter]);

    // const handleInputChange=(e) =>{
    //     const {name, value} = e.target;
    // setChapterData({...chapterData, 
    //     [name]: value,
    //  });
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChapterData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }

    const handleSave =()=>{
        onChapterChange( chapterIndex,chapterData) ;
        console.log(chapterData);
        alert('save chapter');
    }
    return (
        <>
            <CRow>
                <CCol xs={12} >
                    {/* <Link className="linkto text-decoration-none" to="/addsection"><div className='d-flex mt-1'><i className="fa fa-arrow-left mt-1" style={{ fontSize: "15px" }}></i><span className='ms-2 fw-bold'>Back to Section setup</span></div></Link> */}
                    <div className=' fw-bold mt-2 mb-3' style={{ fontSize: "25px" }}>Chapter creation</div>
                    <CCard className="mb-4 cardform">
                        <CForm className='mt-4 ms-4 mb-3' method="post" encType="multipart/form-data">
                            <div className='row'>
                                <div className='col'>
                                    <div className="mb-3">
                                        <div className='row'>
                                            <div className='col-12'>
                                                <CFormLabel htmlFor="exampleFormControlInput1">Video title<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                            </div>
                                            {/* <div className='col-6 text-end'><i className="fa fa-edit ms-2 mt-2"></i><span className='ms-2  me-3 fw-bold'>Edit title</span></div> */}
                                        </div>

                                        <CFormInput
                                            type="text"
                                            id="exampleFormControlInput1"
                                            name="chapter_name"
                                            value={chapterData.chapter_name}
                                            placeholder="Enter video title"
                                            onChange={handleInputChange}
                                            required
                                        />

                                    </div>
                                    <div className="mb-3">
                                        
                                        <CFormLabel htmlFor="exampleFormControlInput2">Video link<sup><i className="fa fa-asterisk" style={{ fontSize: "9px" }}></i></sup></CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="exampleFormControlInput2"
                                    name="Video_link"
                                    value={chapterData.Video_link}
                                    placeholder="Enter video link"
                                    onChange={handleInputChange}
                                    required
                                />

                            </div>

                                </div>
                                {/* <div className='col-lg-6'>
                                    

                                </div> */}
                            </div>
                            <div className='text-center mt-4'>
                              <CButton as ="input"
                              className='btn w-75'
                              type='button'
                              color="primary"
                              value="Save Chapter"
                              onClick ={handleSave}/>
                          {/* <CButton as="input" className='btn w-25' type="button" color="primary" onClick={handleSave}  /> */}
                            </div>
                        </CForm>
                    </CCard>
                </CCol>
            </CRow>

        </>

    )
}

Addchapter.propTypes = {
    chapter: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
    onChapterChange: PropTypes.func.isRequired,
    sectionIndex: PropTypes.number.isRequired,
    chapterIndex: PropTypes.number.isRequired,
  };
   
export default Addchapter