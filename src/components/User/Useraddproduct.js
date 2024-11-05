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
    const [productsList, setProductsList] = useState([]);
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
                    //   value={products.find(p => p.productId === product._id)?.quantity || ''}
                      onChange={(e) => handleProductChange(product._id, e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };
  return (
    <>
        <h3 className="text-center mb-4">Assign Products to User</h3>
      <CForm method="post">
       
        <div className="d-flex justify-content-center text-center">
          <CFormLabel className="mt-1" htmlFor="searchFranchise">
            Enter Sponsor ID:
          </CFormLabel>
          <div className="d-flex justify-content-center text-center flex-column">
            <CFormInput
              className="ms-3"
              id="searchFranchise"
           
              onChange={(e) => setSearchTerm(e.target.value)}
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