/* eslint-disable prettier/prettier */
import React from 'react'
import { useRef,useState, useEffect } from 'react'
import {useReactToPrint} from 'react-to-print'
import { useParams } from'react-router-dom';
import axios from 'axios';
import logo from '../../Image/roundlogo.png'


const Invoicelist = () => {
  const invoicepdf = useRef();
const { id } = useParams();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [invoice,setInvoice] = useState([]);
  useEffect(() =>{
  axios.get(ROOT_URL+`/api/auth/orderdetailsbyid/${id}`)
  .then(invoicepayment=> 
    {setInvoice(invoicepayment.data.data);
      console.log(invoicepayment.data.data);
  
  })
  .catch(err => console.log(err))
 
}, []);
const formattedDate = new Date(invoice.createdAt).toLocaleDateString();

  const generatePDF= useReactToPrint({
    content: ()=>invoicepdf.current,
    documentTitle:"Invoice",
    onAfterPrint:()=>alert("pdf succesfully saved")
  });

  
  return (
    <>
      <div className='invoice'>


        <div className="container">
        <div className='invoice-action text-end'>
                    <a className='btn btn-primary'onClick={generatePDF} ><i className="fa fa-print"></i></a>
                  </div>
          <div className="row mt-2">
            <div className="col-lg-12">
              <div ref={invoicepdf} className='mt-4 ms-5' >
              <div className="card w-100 mb-4 text-end">
                <div className="card-body">
                  <div className='row'>
                  
                  <div className="col-sm-6 invoice-title text-start">

                    <div>
                      <span className="h2">Synthosphere Academy</span><br/>
                      <span className='isologo'>(ISO 9001:2015 Certified)</span>
                    </div>
                    <div className='mt-4' >
                      <p className="mb-1"> HB Town, Sodepur,Kolkata</p>
                      <p className="mb-1"><i className="uil uil-envelope-alt me-1"></i>synthosphereacademy@gmail.com</p>
                      <p><i className="uil uil-phone me-1"></i> 012-345-6789</p>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                  <img className='img-fuild' src={logo} width={160}/>

                  </div>
                  
                  </div>
                  

                  <hr className="my-4" />

                  <div className="row">
                    <div className="col-sm-6 text-start">
                    
                    {invoice ? (
                      <div>
                        <h5 className="font-size-16 mb-3">Billed To:</h5>
                        <h5 className="font-size-15 mb-2">{invoice.fullname}</h5>
                        <p className="mb-1"><span>{invoice.city}</span>, <span>{invoice.state}</span></p>
                        <p className="mb-1">Email: {invoice.email}</p>
                        <p>Ph no: {invoice.phoneno}</p>
                      </div>
                    ) : ('none')}
                   
                      
                    </div>
                    {invoice ? (
                    <div className="col-sm-6">
                      <div className=" text-sm-end">
                        <div>
                          <h5 className="font-size-15 mb-1">Invoice No:</h5>
                          <p>{invoice._id}</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-15 mb-1">Invoice Date:</h5>
                          <p>{formattedDate}</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-15 mb-1">Order No:</h5>
                          <p>{invoice.razorpay_order_id}</p>
                        </div>
                      </div>
                    </div>
                    ) : ('none')}

                  </div>


                  <div className="py-2">
                    <h5 className="font-size-15 text-start">Order Summary</h5>

                    <div className="table-responsive">
                      <table className="table align-middle  table-centered mb-0">
                        <thead>
                          <tr className='text-center'>
                           
                            <th className='text-start'>Course name</th>
                            <th  colSpan="4">Price</th>
                           
                           
                          </tr>
                        </thead>
                        <tbody>
                        { invoice ?  (
                          <>
                          <tr className='text-center' key={invoice._id}>
                            
                            <td>
                              <div>
                                <h6 className=" text-start text-truncate mb-1">{invoice.courses}</h6>
                               
                              </div>
                            </td>
                            <td  colSpan="4">{invoice.amount}/-</td>
                           
                          </tr>
                          <tr>
                            <th scope="row" colSpan="4" className="border-0 text-end">Total(Rs):</th>
                            <td className="border-0 "><h6 className="fw-semibold text-center">{invoice.amount}/-</h6></td>
                          </tr>
                          </>
                        
                        ) : null
                        }

                          {/* <tr>
                            <th scope="row" colSpan="4" className="text-end">Total :</th>
                            <td className="text-end">1298</td>
                          </tr> */}

                          

                        </tbody>
                      </table>
                    </div>
                    
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Invoicelist
