/* eslint-disable prettier/prettier */
import { useState, React,useEffect } from 'react'
import { CCard, CFormInput, CCol, CRow, CForm, CFormLabel, CButton } from '@coreui/react'
import { Link } from 'react-router-dom'
// import uploadpic from '../Image/upload.png';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

import Addchapter from './Addchapter'
const Addsection = ({ section, onSectionChange, onChaptersChange, index }) => {
  const [sectionData, setsectionData] = useState(section);
  const [chapters, SetChapters] = useState(section.chapters.map(chapter => ({ ...chapter })) || [{ chapter_name: '', Video_link: '' }])
    
  useEffect(() => {
    setsectionData(section);
    SetChapters(section.chapters.map(chapter => ({ ...chapter })) || [{ chapter_name: '', Video_link: '' }]);
  }, [section]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setsectionData({ ...sectionData, [name]: value,

     });
  };
  const handleSave = () => {
    onSectionChange(index, sectionData)
    alert('Save section data');
    console.log(sectionData);
  }
  const handleChapterChange = (chapterIndex, newChapterData) => {
    const newChapters = [...sectionData.chapters];
    newChapters[chapterIndex] = newChapterData;
    setsectionData({
      ...sectionData,
      chapters: newChapters,
    });
  }; 
  // const handleChapterChange = ( chapterIndex, newChapterData) => {
  //   const newChapters = [...chapters]
  //   newChapters[chapterIndex] = newChapterData;
  //   SetChapters(newChapters)
  //   console.log(newChapters)
  //   onChaptersChange(index, newChapters);
  // }

  const addChapter = () => {
    SetChapters([...chapters, { chapter_name: '', Video_link: '' }]);
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <div className=" fw-bold mt-2 mb-3" style={{ fontSize: '25px' }}>
            Section creation
          </div>
          <CCard className="mb-4 cardform">
            <CForm className="mt-4 ms-4 mb-3" method="post" encType="multipart/form-data">
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <div className="row">
                      <div className="col">
                        <CFormLabel htmlFor="exampleFormControlInput1">
                          Section title
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                     
                    </div>

                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      name="section_name"
                      value={sectionData.section_name}
                      placeholder="Enter Section title"
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  
                </div>
                <div className="text-center mt-4">
                    <CButton
                      as="input"
                      className="btn w-25"
                      type="button"
                      color="primary"
                      value="Add chapter"
                      onClick={addChapter}
                    />
                  </div>
                
                  {chapters.map((chapter, chapterIndex) => {
  console.log('Chapter being passed:', chapter);
  return (
    <Addchapter
      key={chapterIndex}
      chapter={chapter} 
      sectionIndex={index}
      chapterIndex={chapterIndex}
      onChapterChange={handleChapterChange}
    />
  );
})}
                
              </div>
              <div className="text-center mt-4">
                <CButton
                  as="input"
                  className="btn w-25"
                  type="button"
                  color="primary"
                  value="Save Section"
                  onClick={handleSave}
                />
              </div>
              {/* <button type="button" onClick={addChapter}>
        Add Chapter
      </button> */}
            </CForm>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default Addsection
