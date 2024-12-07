/* eslint-disable prettier/prettier */
import { useState, React} from 'react'
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
const Addproduct = () => {
  const navigate = useNavigate()
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL
  console.log(ROOT_URL);
  // const [courseid, setCourseid] = useState('')
  const [name, setname] = useState('')
  const [category, setcategory] = useState('')
  const [price, setprice] = useState('')
  const [bvPoints, setbvPoints] = useState('')
  const [description, setdescription] = useState('')
  const [picture, setImage] = useState(null)
  const [stock, setstock] = useState('')
  const [ingredients, setingredients] = useState('')
  const [product_benefits, setProductbenefit] = useState('')
  const [how_to_use, sethowtouse] = useState('')
  const [disclaimer, setdisclaimer] = useState('')
  const token = sessionStorage.getItem("admintoken");
 
  // const convertToBase64 = (file) => {
  //   console.log(file)
  //   const reader = new FileReader()
  //   reader.readAsDataURL(file)
  //   const data = new Promise((resolve, reject) => {
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = (err) => {
  //       reject(err)
  //     }
  //   })
  //   return data
  // }

  // const handleFileChange = async (e) => {
  //   const file = e.target.files[0]
  //   const image = await convertToBase64(file)
  //   setImage(image)
  //   // console.log(image)
  // }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);  // Store the File object in state
  };
 
 

 
  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault()
    // alert("submit works")
    if (
      name === '' ||
      // course_description === '' ||
      // wewilllearn === '' ||
      category === '' ||
      price === '' ||
      bvPoints === '' ||
      // introduction_video == '' ||
      picture === ''
    ) {
      swal('Opps!', 'Please fill out all required fields!', 'error')
    } else {
      try {
        await axios
          .post(ROOT_URL + '/api/admin/addProduct', {
            name,
            category,
            price,
            bvPoints,
            picture,
            description,
            stock,
            ingredients,
            product_benefits,
            how_to_use,
            disclaimer
          } ,{
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
        })

          .then((res) => {
            console.log(res)
            swal('yeah', 'Product is  sucessfully inserted!', 'success')
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
            Add new Product{' '}
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
                          Product name
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
                      name="name"
                      placeholder="Enter product name"
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>

                 

                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput3">
                          description
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <ReactQuill
                      theme="snow" // Specify theme
                      name="description" // Set editor content
                      value={description}
                      onChange={(value) => setdescription(value)}
                    />
                  </div>
                 
                  
                  
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput12">
                           price
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="product_price"
                      id="exampleFormControlInput12"
                      placeholder="Enter price"
                      onChange={(e) => setprice(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput12">
                           Ingredients
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="ingredients"
                      id="exampleFormControlInput12"
                      placeholder="Enter ingredients"
                      onChange={(e) => setingredients(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput12">
                           How to use
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="productbenefit"
                      id="exampleFormControlInput12"
                      placeholder="How to use"
                      onChange={(e) => sethowtouse(e.target.value)}
                    />
                  </div>

                 
                  
                 

                  <div className="mb-3">
                    <CFormLabel htmlFor="picture">
                      Product image
                      <sup>
                        <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                      </sup>
                    </CFormLabel>
                    <CFormInput
                      type="file"
                      id="picture" name="picture" accept="image/*"
                      // onChange={handleFileChange}
                      onChange={handleFileChange}
                    />
                  </div>
                  {/* <div className="text-center">
                    {imageUrl ? (
                      <img width={400} height={300} src={imageUrl} />
                    ) : (
                      <img width={150} height={150} src={uploadpic} />
                    )}
                  </div> */}
                </div>

                <div className="col-lg-6">
                <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput2">
                          product category
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput2"
                      name="name"
                      placeholder="Enter product category"
                      onChange={(e) => setcategory(e.target.value)}
                    />
                  </div>
                <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput6">
                          Bv points
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="bv_points"
                      id="exampleFormControlInput6"
                      placeholder="Enter Bv points"
                      onChange={(e) => setbvPoints(e.target.value)}
                    />
                  </div>
                <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput7">
                        stock
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="Enter Stock"
                      id="exampleFormControlInput7"
                      placeholder="Enter stock"
                      onChange={(e) => setstock(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput12">
                           Product benefit
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="productbenefit"
                      id="exampleFormControlInput12"
                      placeholder="Enter ingredients"
                      onChange={(e) => setProductbenefit(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-6">
                        <CFormLabel htmlFor="exampleFormControlInput12">
                           Disclaimer
                          <sup>
                            <i className="fa fa-asterisk" style={{ fontSize: '9px' }}></i>
                          </sup>
                        </CFormLabel>
                      </div>
                    </div>
                    <CFormInput
                      type="text"
                      name="productbenefit"
                      id="exampleFormControlInput12"
                      placeholder="Disclaimer"
                      onChange={(e) => setdisclaimer(e.target.value)}
                    />
                  </div>


                  
                
                </div>
              </div>
              <CButton
                  as="input"
                  className="btn w-25 mt-5"
                  type="submit"
                  color="primary"
                  value="Submit"
                  onClick={handleSubmit}
                />
              
            </CForm>
          </CCard>
        </CCol>
      </CRow>
      <CCardFooter></CCardFooter>
    </>
  )
}
export default Addproduct
