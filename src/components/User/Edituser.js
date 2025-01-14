import React, { useState, useEffect } from 'react'
import {
  CCard,
  CFormInput,
  CCol,
  CRow,
  CForm,
  CButton,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
const Edituser = () => {
  const { id } = useParams() // Get product ID from the route parameter
  const navigate = useNavigate()
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL
  const [loading, setLoading] = useState(false)
  const [user, setUsers] = useState({
    name: '',
    sponsorId: '',
    gender: '',
    dob: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    state: '',
    district: '',
    pincode: '',
    address: '',
    password: '',
    gstNumber: '',
  })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/api/auth/handleUserbyitsid/${id}`)
        const fetcheduser = response.data
        console.log(fetcheduser)
        setUsers({
          name: fetcheduser.name || '',
          gender: fetcheduser.gender || '', // Assuming category is an array
          dob: fetcheduser.dob ? new Date(fetcheduser.dob).toISOString().split('T')[0] : '',
          sponsorId: fetcheduser.mySponsorId || '',
          mobileNumber: fetcheduser.mobileNumber || '',
          whatsappNumber: fetcheduser.whatsappNumber || '',
          email: fetcheduser.email || '',
          state: fetcheduser.state || '',
          district: fetcheduser.district || '',
          pincode: fetcheduser.pincode || '',
          address: fetcheduser.address || '',
          
          gstNumber: fetcheduser.gstNumber || '',
        })
      } catch (error) {
        console.error('Error fetching user details:', error)
        swal('oops', 'Error fetching user details', error)
      }
    }

    fetchProduct()
  }, [id, ROOT_URL])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUsers((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData()

      formData.append('gender', user.gender)
      formData.append('name', user.name)
      formData.append('dob', user.dob)
      formData.append('mobileNumber', user.mobileNumber)
      formData.append('whatsappNumber', user.whatsappNumber)
      formData.append('email', user.email)
      formData.append('state', user.state)
      formData.append('district', user.district)
      formData.append('pincode', user.pincode)
      formData.append('address', user.address)
      formData.append('gstNumber', user.gstNumber)
      formData.append('password', user.password)
      console.log('FormData:', Object.fromEntries(formData.entries()))

      const response = await axios.put(`${ROOT_URL}/api/auth/handleEditUserDetails`, formData, {
        headers: {
          sponsorId: user.sponsorId,
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        swal('Yeah!', 'User details updated successfully!', 'success')
        navigate('/user/allusers') // Redirect to the products list
      }
    } catch (error) {
      console.error('Error updating user:', error)
      const errorMessage = error.response?.data?.message || 'An error occurred.'
      alert(`Failed to update user: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="mb-4">Edit user details</h2>
        <CCard className="p-4">
          <CForm onSubmit={handleSubmit}>
            <CRow className="mb-3">
              <CCol md="4">
                <CFormLabel>Name</CFormLabel>
                <CFormInput
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Enter user name"
                />
              </CCol>
              {/* <CCol md="4">
                <CFormLabel>Gender</CFormLabel>
                <CFormInput
                  type="text"
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                  placeholder="Enter Gender"
                />
              </CCol> */}
              <CCol md="4">
                <CFormLabel>Gender</CFormLabel>
                <CFormSelect name="gender" value={user.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </CFormSelect>
              </CCol>
              <CCol md="4">
                <CFormLabel>User ID</CFormLabel>
                <CFormInput type="text" name="sponsorId" value={user.sponsorId} readOnly={true} />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md="6">
                <CFormLabel>MobileNumber</CFormLabel>
                <CFormInput
                  type="text"
                  name="mobileNumber"
                  value={user.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                />
              </CCol>
              {/* <CCol md="6">
                <CFormLabel>Date of birth</CFormLabel>
                <CFormInput
                  type="text"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                  placeholder="Enter date of birth"
                />
              </CCol> */}
              <CCol md="6">
                <CFormLabel>Date of Birth</CFormLabel>
                <CFormInput
                  type="date"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                  placeholder="Select date of birth"
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md="6">
                <CFormLabel>whatsappNumber</CFormLabel>
                <CFormInput
                  type="text"
                  name="whatsappNumber"
                  value={user.whatsappNumber}
                  onChange={handleChange}
                  placeholder="Enter whatsappNumber"
                />
              </CCol>
              <CCol md="6">
                <CFormLabel>email</CFormLabel>
                <CFormInput
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter date of birth"
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md="6">
                <CFormLabel>state</CFormLabel>
                <CFormInput
                  type="text"
                  name="state"
                  value={user.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                />
              </CCol>
              <CCol md="6">
                <CFormLabel>district</CFormLabel>
                <CFormInput
                  type="text"
                  name="district"
                  value={user.district}
                  onChange={handleChange}
                  placeholder="Enter district"
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md="6">
                <CFormLabel>pincode</CFormLabel>
                <CFormInput
                  type="text"
                  name="pincode"
                  value={user.pincode}
                  onChange={handleChange}
                  placeholder="Enter state"
                />
              </CCol>
              <CCol md="6">
                <CFormLabel>address</CFormLabel>
                <CFormInput
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  placeholder="Enter district"
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md="6">
                <CFormLabel>password</CFormLabel>
                <CFormInput
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                />
              </CCol>
              <CCol md="6">
                <CFormLabel>GST number</CFormLabel>
                <CFormInput
                  type="text"
                  name="gstNumber"
                  value={user.gstNumber}
                  onChange={handleChange}
                  placeholder="Enter gstnumber"
                />
              </CCol>
            </CRow>
            <CButton type="submit" color="primary" disabled={loading}>
              {loading ? 'Updating...' : 'Update user'}
            </CButton>
          </CForm>
        </CCard>
      </div>
    </>
  )
}

export default Edituser
