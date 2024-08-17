/* eslint-disable prettier/prettier */
import { useState, React, useEffect } from 'react'
import {
  CCardFooter,
  CCard,
  CFormInput,
  CCol,
  CRow,
  CForm,
  CFormSelect,
  CFormLabel,
  CButton,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import uploadpic from '../Image/uploadimage.png'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Addsection from './Addsection'
// import teacher from '../../../backend/model/teacher'
const Addproduct = () => {
  const navigate = useNavigate()
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL
  // const [courseid, setCourseid] = useState('')
  const [course_name, setCoursename] = useState('')
  const [course_description, setCourse_description] = useState('')
  const [wewilllearn, setWewilllearn] = useState('')
  // const [course_review, setCoursereview] = useState('')
  const [total_video, setVideos] = useState('')
  // const [teacher_name, setTeacher_name] = useState('')
  // const [teacher_dept, setTeacher_dept] = useState('')
  const [course_price, setCourseprice] = useState('')
  const [course_category, setcoursecategory] = useState('')
  const [image, setImage] = useState(null)
  const [introduction_video, setIntroduction_video] = useState('')
  const [selectedTeacher, setSelectedTeacher] = useState('')
  const [teachers, setTeachers] = useState([])
  const [teacher_dept, setTeacherdept] = useState([])
  // const [file_resource, setFile] = useState(null)
  const [sections, setSections] = useState([
    { section_name: '', chapters: [{ chapter_name: '', Video_link: '' }] },
  ])

  //section change
  const handleSectionChange = (index, newSectionData) => {
    const newSections = [...sections]
    newSections[index] = newSectionData
    setSections(newSections)
    console.log(newSections)
  }
  const handleChaptersChange = (sectionIndex, newChapters) => {
    const newSections = [...sections]
    newSections[sectionIndex].chapters = newChapters
    setSections(newSections)
    console.log(newSections)
  }
  const addSection = () => {
    setSections([
      ...sections,
      { section_name: '', chapters: [{ chapter_name: '', Video_link: '' }] },
    ])
  }
  const convertToBase64 = (file) => {
    console.log(file)
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
    const image = await convertToBase64(file)
    setImage(image)
    // console.log(image)
  }
  const handlecourse_categorychange = (event) => {
    setcoursecategory(event.target.value)
  }
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(ROOT_URL + '/api/auth/allteacher')
        setTeachers(response.data)
      } catch (error) {
        console.error('Error fetching teachers:', error)
      }
    }

    fetchTeachers()
  }, [])

 
  //handle submit
  const handleSubmit = async (event) => {
   
   
    event.preventDefault()
    console.log(course_description)
    console.log(sections)

    // alert("submit works")
    if (
      course_name === '' ||
      course_description === '' ||
      wewilllearn === '' ||
      total_video === '' ||
      course_price === '' ||
      teacher_dept === '' ||
      introduction_video == '' ||
      image === ''
    ) {
      swal('Opps!', 'Please fill out all required fields!', 'error')
    } else {
      try {
        const teacher = teachers.find((t) => t._id === selectedTeacher)
        if (teacher) {
          setTeacherdept(teacher.teacher_dept);
        }
        console.log(teacher_dept)
        console.log(teacher.fullname)
        console.log(teacher.teacher_dept)
        await axios
          .post(ROOT_URL + '/api/v1/course', {
            course_name,
            course_description,
            wewilllearn,
            total_video,
            teacherId: selectedTeacher,
            teacher_name: teacher.fullname,
            teacher_dept:teacher.teacher_dept,
            course_category,
            course_price,
            image,
            introduction_video,
            sections,
          })

          .then((res) => {
            console.log(res)
            swal('yeah', 'Course is  sucessfully inserted!', 'success')
            navigate('/dashboard')
          })
      } catch (error) {
        console.error('Error:', error)
        swal('Opps!', 'Not inserted !', 'error')
      }
    }
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <div className=" fw-bold mt-2 mb-3" style={{ fontSize: '25px' }}>
            Add new course{' '}
          </div>
          <CCard className="mb-4 cardform">
            <CForm className="mt-4 ms-4 mb-3" method="post" encType="multipart/form-data">
              <div className="row">
                <div className="col-lg-6">
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
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput2">
                          Course title
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                      {/* <div className="col-6 text-end">
                        <i className="fa fa-edit ms-2 mt-2"></i>
                        <span className="ms-2 fw-bold me-3">Edit title</span>
                      </div> */}
                    </div>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput2"
                      name="course_name"
                      placeholder="Enter course title"
                      onChange={(e) => setCoursename(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput2">
                          Course description
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
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
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput3">
                          What we will learn
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <ReactQuill
                      theme="snow" // Specify theme
                      name="wewilllearn" // Set editor content
                      value={wewilllearn}
                      onChange={(value) => setWewilllearn(value)}
                    />
                  </div>
                 
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput4">
                          Teachers name
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormSelect
                      id="teacherSelect"
                      value={selectedTeacher}
                      onChange={(e) => {
                        const value = e.target.value
                        console.log(`Selected Teacher ID: ${value}`)
                        setSelectedTeacher(value)
                      }}
                    >
                      <option value="" disabled>
                        Select a teacher
                      </option>
                      {teachers.map((teacher) => (
                        <option key={teacher._id} value={teacher._id}>
                          {teacher.fullname}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput4">
                          Teacher's dept
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                 {
                  setSelectedTeacher && (
                     <CFormSelect id="disabledSelect">
                      <option>{teachers.filter(
                        (teacher) => teacher._id === selectedTeacher
                      ).map((teacher) => teacher.teacher_dept)}
                      </option>
                    </CFormSelect>
                     
                   
                  )
                 }
                    
                  </div>
                  

                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput6">
                          Course price
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="course_price"
                      id="exampleFormControlInput6"
                      placeholder="Enter course price"
                      onChange={(e) => setCourseprice(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput6">
                          Total Video
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="total_video"
                      id="exampleFormControlInput6"
                      placeholder="Enter total video"
                      onChange={(e) => setVideos(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput7">
                          Introduction Video
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="introduction_video"
                      id="exampleFormControlInput7"
                      placeholder="Enter video link"
                      onChange={(e) => setIntroduction_video(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput6">
                      Course category
                      <sup>
                        <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                      </sup>
                    </CFormLabel>
                    <CFormSelect
                      className=" me-2"
                      onChange={handlecourse_categorychange}
                      aria-label="Default select example"
                    >
                      <option>Select one category</option>
                      <option value="music">Music</option>
                      <option value="blockchain">Blockchain</option>
                      <option value="python">Python</option>
                    </CFormSelect>
                  </div>

                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput7">
                      course image
                      <sup>
                        <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                      </sup>
                    </CFormLabel>
                    <CFormInput
                      type="file"
                      name="image"
                      id="exampleFormControlInput7"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="text-center">
                    {image ? (
                      <img width={400} height={300} src={image} />
                    ) : (
                      <img width={150} height={150} src={uploadpic} />
                    )}
                  </div>
                </div>

                <div className="col-lg-6 text-center">
                  <CButton
                    as="input"
                    className="btn w-25"
                    type="button"
                    color="primary"
                    value="Add Section"
                    onClick={addSection}
                  />
                  {sections.map((section, sectionIndex) => (
                    <Addsection
                      key={sectionIndex}
                      section={section}
                      index={sectionIndex}
                      onSectionChange={handleSectionChange}
                      onChaptersChange={handleChaptersChange}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <CButton
                  as="input"
                  className="btn w-25"
                  type="submit"
                  color="primary"
                  value="Submit"
                  onClick={handleSubmit}
                />
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
