import {React,useState, useEffect} from 'react'
import { CCard, CFormInput, CCol, CRow, CForm, CImage, CFormLabel, CButton, CCardImage } from '@coreui/react'
import { Link ,useParams } from 'react-router-dom'
// import pic1 from '../assets/images/login1.jpg'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import axios from 'axios';
import swal from 'sweetalert'
const Editcourse = () => {
    const { id } = useParams();
    console.log(id);
    const [image , setimage] = useState('');
    const [description, setDescription] = useState('');
    const [wewill_learn, setWewillLearn] = useState(''); 
    const [course, setCourse] = useState({
        course_name: '',
        total_video: '',
        course_category: '',
        course_description: '',
        wewilllearn: '',
        image: '',
        course_price: '',
        introduction_video: '',
        teacher_name:'',
        sections: [{ section_name: '', chapters: [{ chapter_name: '', Video_link: '' }] }]
      });


      useEffect(() => {
        const fetchCourse = async () => {
            const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
          try {
            const response = await axios.get( ROOT_URL +`/api/v1/getcoursebyid/${id}`)
            console.log(response.data);
            setCourse(response.data);
            setDescription(response.data.course_description);
            setWewillLearn(response.data.wewilllearn);
          } catch (error) {
            console.error('Error fetching course data', error);
          }
        };
    
        fetchCourse();
      }, [id]);

//handlechange


const handleChange = (e, sectionIndex, chapterIndex) => {
    const { name, value } = e.target;
    const updatedCourse = { ...course};

    if (typeof chapterIndex === 'number') {
      updatedCourse.sections[sectionIndex].chapters[chapterIndex][name] = value;
    } else if (typeof sectionIndex === 'number') {
      updatedCourse.sections[sectionIndex][name] = value;
    } else {
      updatedCourse[name] = value;
    }
    console.log('Updated Course:', updatedCourse);
    setCourse(updatedCourse);
  };
////



    const convertToBase64 = (file) => {
        // console.log(file)
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
        const image = await convertToBase64(file);
        setimage(image)
        console.log(image)
        setCourse((prevCourse) => ({ ...prevCourse, image: image }));
        
      }
      const combinedOnChangeHandler = (e) => {
        handleFileChange(e);
        handleChange();
      };
      const handleDescriptionChange = (value) => {
        setDescription(value);
        setCourse((prevdep) => ({ ...prevdep, course_description: value }));
        
      };
      const handlewewilllearnChange = (value) => {
        setWewillLearn(value);
        setCourse((prevlearn) => ({ ...prevlearn, wewilllearn: value }));
        
      };
      const editcourse = async () => {
        try {
          //  alert("submit")
            const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
            const updatedCourse = { ...course, course_description: description, wewilllearn: wewill_learn}; 
            const response = await axios.put(ROOT_URL +`/api/v1/editcourses/${id}`, updatedCourse,image);
          
            console.log(response)
            
         swal("wow!","Course details updated successfully!","success")
         
        
       } catch (error) {
          swal("Opps!", "not updated!", "error");
          console.error('Error updating course', error);
        }
      };
      const confirmEdit = () => {
        swal({
          title: "Are you sure?",
          text: "Do you want to edit this course?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willedit) => {
          if (willedit) {
            editcourse();
          } else {
            swal("Your course is not edit!");
          }
        });
      };

  return (
    <>
    <CRow>
      <CCol xs={12}>
        <Link className="linkto" to="/dashboard">
          <div className="d-flex mt-2">
            <i className="fa fa-arrow-left  mt-1"></i>
            <span className="ms-2 fw-bold">Back to Course</span>
          </div>
        </Link>

        <div className=" fw-bold mt-2 mb-3" style={{ fontSize: '25px' }}>
          Course Information
        </div>
        <CCard className="mb-4 cardform">
          <CForm className="mt-4 ms-4 mb-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Course Name</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput1" name='course_name' value={course.course_name}
                   onChange={handleChange}  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput2">Total Video</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput2"  name="total_video" value={course.total_video}  onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput3">Course category</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput3" name='course_category' value={course.course_category}  onChange={handleChange} />
                </div>
                <div className='mb-3'>
                <CFormLabel htmlFor="exampleFormControlInput3">Course Description</CFormLabel>
                <ReactQuill
                      theme="snow" // Specify theme
                      name="course_description" // Set editor content
                      value={description}
                      onChange={handleDescriptionChange}
                      
                    />
                {/* <CFormInput
                    type='text' // Specify theme
                    name="course_description" // Set editor content
                    value={course.course_description}
                    onChange={handleChange}   
                  /> */}
                  </div>
                  <div className='mb-3'>
                <CFormLabel htmlFor="exampleFormControlInput3">We will learn</CFormLabel>
                <ReactQuill
                      theme="snow" // Specify theme
                      name="wewilllearn" // Set editor content
                      value={wewill_learn}
                      onChange={handlewewilllearnChange}
                      
                      
                    />
                {/* <CFormInput
                    type='text' // Specify theme
                    name="wewilllearn" // Set editor content
                    value={wewill_learn}
                    onChange={handleChange} 
                  /> */}
                  </div>

                <div className="mb-3 ">
                  <CFormLabel htmlFor="exampleFormControlInput5">Image</CFormLabel>
                  <div>
                  <CFormInput
                    type="file"
                    name="image"
                    id="exampleFormControlInput5"
                    accept="image/*"

                    onChange={combinedOnChangeHandler}
                  />
                  <div className=" mt-2">
                  {course.image ? (
                    <img width={400} height={300} src={course.image} />
                  ) : (
                    <img width={150} height={150} src={image} />
                  )}
                </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput5">Course price</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput5" name='course_price' value={course.course_price}  onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput5">Introduction video</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput5" name='introduction_video' value={course.introduction_video} onChange={handleChange} />
                </div>
                {course.sections.map((section, sectionIndex) => (

                    <div className="mb-3" key={sectionIndex} >
                    <CFormLabel htmlFor="exampleFormControlInput6">Sections:-</CFormLabel>
                    <CFormInput type="text" id="exampleFormControlInput6" name='section_name' value={section.section_name} onChange={(e) => handleChange(e, sectionIndex)}/>
                    {section.chapters.map((chapter, chapterIndex) => (
                        <div key={chapterIndex}>
                        <CFormLabel htmlFor="exampleFormControlInput6">Chapters:-</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlInput6"   name='chapter_name' value={chapter.chapter_name}  onChange={(e) => handleChange(e, sectionIndex, chapterIndex)}/>
                        <CFormInput type="text" id="exampleFormControlInput6" className='mt-2' name='Video_link' value={chapter.Video_link} />
                        </div>
                    ))}
                    </div>
                ))}
                {/* <div className="mb-3" >
                  <CFormLabel htmlFor="exampleFormControlInput6">Sections:-</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput6" name='section_name' value="Section Name"/>
                  <CFormLabel htmlFor="exampleFormControlInput6">Chapters:-</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput6"   name='chapter_name' value="Chapter Name"/>
                  <CFormInput type="text" id="exampleFormControlInput6" className='mt-2' name='Video_link' value="Video Link"/>
                </div> */}
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput7">Teacher name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput7"
                    name='teacher_name'
                    value={course.teacher_name}
                    onChange={handleChange}   
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <CButton
                as="input"
                className="btn w-25"
                color="primary"
                value="Update"
                onClick={confirmEdit}
                
              />
            </div>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </>
  )
}

export default Editcourse