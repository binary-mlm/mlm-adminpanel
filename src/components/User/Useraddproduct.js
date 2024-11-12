import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {
  CCardFooter,
  CCard,
  CFormInput,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CButton,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

const Useraddproduct = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const token = sessionStorage.getItem('admintoken');
    const [usersponsorId, setUsersponsorId] = useState('');
    const [productsList, setProductsList] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(ROOT_URL + '/api/admin/viewProducts', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setProductsList(response.data.products);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, [token]);

      const handleProductChange = (productId, value) => {
        const quantityValue = parseInt(value, 10)
        const updatedProducts = [...products]
        const productIndex = updatedProducts.findIndex((product) => product.productId === productId)
    
        if (productIndex >= 0) {
          if (
            !isNaN(quantityValue) &&
            quantityValue >= 0 &&
            quantityValue <= productsList.find((p) => p._id === productId)?.stock
          ) {
            updatedProducts[productIndex].quantity = quantityValue
          } else {
            updatedProducts[productIndex].quantity = 0
          }
        } else {
          updatedProducts.push({
            productId,
            quantity: quantityValue >= 0 ? quantityValue : 0,
            price: productsList.find((p) => p._id === productId).price,
            bvPoints: productsList.find((p) => p._id === productId).bvPoints,
          })
        }
        setProducts(updatedProducts)
      }


      const renderProductCard = (product) => {
        return (
          <div className="col" key={product._id}>
            <div className="card h-100 d-flex flex-column">
              <img
                className="card-img-top cardimage"
                src={product.imageURL}
                style={{ width: '100%', height: '80%' }}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <div className="row">
                  <div className="col-5">Product name:</div>
                  <div className="col-7">{product.name}</div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">Available Quantity:</div>
                  <div className="col-6">{product.stock}</div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">Price:</div>
                  <div className="col-6">₹{product.price}</div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">BV Points:</div>
                  <div className="col-6">{product.bvPoints}</div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">Assign Quantity:</div>
                  <div className="col-6">
                  <input
                  type="number"
                  min="0"
                  max={product.stock}
                  value={products.find((p) => p.productId === product._id)?.quantity || ''}
                  onChange={(e) => handleProductChange(product._id, e.target.value)}
                />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (!usersponsorId || products.length === 0) {
          swal('Error', 'Please select a user sponsor id and add at least one product.', 'error')
          return
        }
        try {
          const response = await axios.post(
            ROOT_URL + `/api/admin/user/${usersponsorId}/assign-products`,
            { products },
          )
          // setTotalPrice(response.data.totalPrice)
          swal('Success', 'Products are successfully assigned!', 'success').then(() => {
            window.location.reload() // Reload the page after success alert
          })
        } catch (error) {
          if (error.response && error.response.data && error.response.data.message) {
            swal('Error', error.response.data.message, 'error')
          } else {
            swal('Error', 'An error occurred while assigning products.', 'error')
          }
        }
      }
  return (
    <>
        <h3 className="text-center mb-4">Assign Products to User</h3>
      <CForm method="post" onSubmit={handleSubmit}>
       
        <div className="d-flex justify-content-center text-center">
          <CFormLabel className="mt-1" htmlFor="searchFranchise">
            Enter Sponsor ID:
          </CFormLabel>
          <div className="d-flex justify-content-center text-center flex-column">
            <CFormInput
              className="ms-3"
              id="searchFranchise"
           
              onChange={(e) => setUsersponsorId(e.target.value)}
              placeholder="User sponsor ID..."
            />
          </div>
        </div>

        {/* Product List */}
        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {productsList.map((product) => renderProductCard(product))}
          </div>
        </div>
        <br />
        <CButton
          as="input"
          className="btn w-25 mb-3"
          type="submit"
          color="primary"
          value="Assign Products"
        />
      </CForm>
    </>
  )
}

export default Useraddproduct