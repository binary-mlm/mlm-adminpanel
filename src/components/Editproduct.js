import React, { useState, useEffect } from 'react';
import { CCard, CFormInput, CCol, CRow, CForm, CButton, CFormLabel } from '@coreui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import swal from 'sweetalert'
const Editproduct = () => {
  const { id } = useParams(); // Get product ID from the route parameter
  const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL; // API base URL
  const token = sessionStorage.getItem("admintoken");

  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    bvpoints: '',
    description:'',
    stock: '',
    ingredients:'',
    product_benefits:'',
    how_to_use :'',
    disclaimer:''
  });
  const [loading, setLoading] = useState(false);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/api/user/getProductById/${id}`);

        const fetchedProduct = response.data.product;
        setProduct({
          name: fetchedProduct.name || '',
          category: fetchedProduct.category[0] || '', // Assuming category is an array
          price: fetchedProduct.price || '',
          bvpoints: fetchedProduct.bvPoints || '',
          description: fetchedProduct.description || '',
          stock: fetchedProduct.stock || '',
          ingredients: fetchedProduct.ingredients || '',
          product_benefits: fetchedProduct.product_benefits || '',
          how_to_use: fetchedProduct.how_to_use || '',
          disclaimer: fetchedProduct.disclaimer || ''
           
        });
      } catch (error) {
        console.error('Error fetching product details:', error);
        alert('Failed to fetch product details.');
      }
    };

    fetchProduct();
  }, [id, ROOT_URL, token]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleDescriptionChange = (value) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      description: value,
    }));
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${ROOT_URL}/api/admin/editProduct/${id}`,
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        swal("Yeah!","Product details updated successfully!","success")
        navigate('/dashboard'); // Redirect to the products list
      }
    } catch (error) {
      console.error('Error updating product:', error);
      const errorMessage = error.response?.data?.message || 'An error occurred.';
     
      alert(`Failed to update product: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Edit Product</h2>
      <CCard className="p-4">
        <CForm onSubmit={handleSubmit}>
          <CRow className="mb-3">
            <CCol md="6">
              <CFormLabel>Name</CFormLabel>
              <CFormInput
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Enter product name"
                
              />
            </CCol>
            <CCol md="6">
              <CFormLabel>Category</CFormLabel>
              <CFormInput
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
                placeholder="Enter category"
              
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md="6">
              <CFormLabel>Price</CFormLabel>
              <CFormInput
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Enter price"
                
              />
            </CCol>
            <CCol md="6">
              <CFormLabel>BV Points</CFormLabel>
              <CFormInput
                type="number"
                name="bvpoints"
                value={product.bvpoints}
                onChange={handleChange}
                placeholder="Enter BV points"
              
              />
            </CCol>
           
          </CRow>
          <CRow className="mb-3">
            <CCol md="6">
              <CFormLabel>Ingredients</CFormLabel>
              <CFormInput
                type="text"
                name="ingredients"
                value={product.ingredients}
                onChange={handleChange}
                placeholder="Enter ingredients"
              
              />
            </CCol>
            <CCol md="6">
              <CFormLabel>product benefits</CFormLabel>
              <CFormInput
                type="text"
                name="product_benefits"
                value={product.product_benefits}
                onChange={handleChange}
                placeholder="Enter Benefits"
              
              />
            </CCol>
            </CRow>
            <CRow className="mb-3">
            <CCol md="6">
              <CFormLabel>how_to_use</CFormLabel>
              <CFormInput
                type="text"
                name="how_to_use"
                value={product.how_to_use}
                onChange={handleChange}
                placeholder="Enter how to use"
              
              />
            </CCol>
            <CCol md="6">
              <CFormLabel>Disclaimer</CFormLabel>
              <CFormInput
                type="text"
                name="disclaimer"
                value={product.disclaimer}
                onChange={handleChange}
                placeholder="Enter disclaimer"
              
              />
            </CCol>
            </CRow>
          <CRow className="mb-3">
          <CCol md="6">
              <CFormLabel>Description</CFormLabel>
              <ReactQuill
                value={product.description}
                onChange={handleDescriptionChange}
                placeholder="Enter product description"
              />
            </CCol>
            <CCol md="6">
              <CFormLabel>Stock</CFormLabel>
              <CFormInput
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Enter stock"
                
              />
            </CCol>
            </CRow>
          <CButton type="submit" color="primary" disabled={loading}>
            {loading ? 'Updating...' : 'Update Product'}
          </CButton>
        </CForm>
      </CCard>
    </div>
  );
};

export default Editproduct;
