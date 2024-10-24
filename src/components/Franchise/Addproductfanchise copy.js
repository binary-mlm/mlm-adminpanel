import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import swal from 'sweetalert'

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
const Addproductfanchise = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const token = sessionStorage.getItem("admintoken");
    const [franchises, setFranchises] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFranchise, setSelectedFranchise] = useState('');
    const [productsList, setProductsList] = useState([]);
    const [products, setProducts] = useState([{ productId: '', quantity: '', price: '', bvPoints: '' }]);
    
   
  
    // Fetch franchises on component mount
    useEffect(() => {
        if(!productsList.length){
        const fetchProducts = async () => {
          try {
            const response = await axios.get(ROOT_URL+'/api/admin/viewProducts',{
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }) // Adjust this endpoint to match your API
            setProductsList(response.data.products);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        }
    
    
        fetchProducts();
    }
      }, []);

      const redercoursecard = (productdata) => {
        return (
          <div className="col" key={productdata._id}>
            <div className="card h-100 d-flex flex-column">
            <img
            className="card-img-top cardimage "
            src={productdata.imageURL} style={{width:"100%" , height:"80%"}}
            alt="Sample photo"
          />
              
              <div className="card-body flex-grow-1">
                <div className="row">
                  <div className="col-5">
                    <span className="">Product name:</span>
                  </div>
                  <div className="col-7">
                  <span className="ms-2"> {productdata.name}</span>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <span className="ms-2">Quantity</span>
                  </div>
                  <div className="col-6">
                  <span className="ms-2"> {productdata.stock}</span>
                  </div>
                </div>
                <div className="row mt-2" >
                  <div className="col-6">
                    <span className="ms-2">Price</span>
                  </div>
                  <div className="col-6">
                  <span className="ms-2">₹{productdata.price} </span>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <span className="ms-2">Bv points</span>
                  </div>
                  <div className="col-6">
                  <span className="ms-2">{productdata.bvPoints} </span>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-5">
                    <span className="ms-2">Quantity</span>
                  </div>
                  <div className="col-7">
                  <input type='number'/>
                  </div>
                </div>
                
              
              </div>
              <div className="">
                <div className="col-12 text-center">
                  <a
                    
                  >
                    {/* <button className="btn btn-primary w-50 mb-3 ">Buy Now</button> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      };
    useEffect(() => {
      const fetchFranchises = async () => {
        try {
          const response = await axios.get(ROOT_URL+'/api/admin/getAllFranchies'); // Adjust this endpoint to match your API
          setFranchises(response.data);
        } catch (error) {
          console.error('Error fetching franchises:', error);
        }
      };
  
      fetchFranchises();
    }, []);
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(ROOT_URL+`/api/admin/franchise/${selectedFranchise}/assign-products`, {
          products,
        });
       
        console.log(response)
        swal('yeah', 'products are sucessfully added!', 'success')
        // navigate('/dashboard')
      } catch (error) {
       
        console.log(error);
      }
    };
  
    // Handle product field change
  
  
    // Add a new product input
    // const addProductField = () => {
    //   setProducts([...products, { productId: '', quantity: '', price: '', bvPoints: '' }]);
    // };
  return (
   <>
    <h3 className='text-center mb-4'>Assign Products to Franchise</h3>

<CForm method="post"> 
  {/* Franchise Dropdown */}
  <div className=' d-flex justify-content-center  text-center'>
  <CFormLabel className='mt-1' htmlFor="franchise">Select Franchise:</CFormLabel>
  <CFormSelect
  className='w-25 ms-3'
    id="franchise"
    value={selectedFranchise}
    onChange={(e) => setSelectedFranchise(e.target.value)}
    required
  >
    <option value="">-- Select Franchise --</option>
    {franchises.map((franchise) => (
      <option key={franchise._id} value={franchise.franchiseId}>
        {franchise.franchiseName}
      </option>
    ))}
  </CFormSelect>
  </div>
  <div className='container mt-3'>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
  {productsList.map(redercoursecard)}
  </div>
  </div>

 

  {/* Button to add more products */}
 
  

  <br />
  <CButton
                  as="input"
                  className="btn w-25 mb-3"
                  type="submit"
                  color="primary"
                  value="Assign product"
                  onClick={handleSubmit}
                />
</CForm>


   </>
  )
}

export default Addproductfanchise