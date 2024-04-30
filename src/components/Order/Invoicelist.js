/* eslint-disable prettier/prettier */
import React from 'react'
import { useRef } from 'react'
import {useReactToPrint} from 'react-to-print'

const Invoicelist = () => {
  const invoicepdf = useRef();

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
              <div ref={invoicepdf} style={{width:"100%"}}>
              <div className="card mb-4">
                <div className="card-body">
                  <div className='row'>
                  
                  <div className="invoice-title text-start">

                    <div className="mb-4">
                      <h2 className="mb-1 ">Synthosphere Academy</h2>
                    </div>
                    <div >
                      <p className="mb-1">3184 Spruce Drive Pittsburgh, PA 15201</p>
                      <p className="mb-1"><i className="uil uil-envelope-alt me-1"></i> xyz@987.com</p>
                      <p><i className="uil uil-phone me-1"></i> 012-345-6789</p>
                    </div>
                  </div>
                  
                  </div>
                  

                  <hr className="my-4" />

                  <div className="row">
                    <div className="col-sm-6">
                      <div>
                        <h5 className="font-size-16 mb-3">Billed To:</h5>
                        <h5 className="font-size-15 mb-2">Preston Miller</h5>
                        <p className="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                        <p className="mb-1">PrestonMiller@armyspy.com</p>
                        <p>001-234-5678</p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className=" text-sm-end">
                        <div>
                          <h5 className="font-size-15 mb-1">Invoice No:</h5>
                          <p>#DZ0112</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-15 mb-1">Invoice Date:</h5>
                          <p>12 Oct, 2020</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-15 mb-1">Order No:</h5>
                          <p>#1123456</p>
                        </div>
                      </div>
                    </div>

                  </div>


                  <div className="py-2">
                    <h5 className="font-size-15 text-start">Order Summary</h5>

                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap table-centered mb-0">
                        <thead>
                          <tr className='text-center'>
                            <th >No.</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Payment method</th>
                            <th className="text-end">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className='text-center'>
                            <td scope="row">01</td>
                            <td>
                              <div>
                                <h6 className="text-truncate mb-1">Basic Guitar Lessons</h6>
                                {/* <p className="text-muted mb-0">Watch, Black</p> */}
                              </div>
                            </td>
                            <td>599/-</td>
                            <td >UPI</td>
                            <td className="text-end">599</td>
                          </tr>

                          <tr className='text-center'>
                            <td scope="row">02</td>
                            <td>
                              <div>
                                <h6 className="text-truncate mb-1">Yoga master class</h6>
                                {/* <p className="text-muted mb-0">Watch, Gold</p> */}
                              </div>
                            </td>
                            <td>699/-</td>
                            <td className='ms-2'>UPI</td>
                            <td className="text-end">699</td>
                          </tr>

                          <tr>
                            <th scope="row" colSpan="4" className="text-end">Sub Total :</th>
                            <td className="text-end">1298</td>
                          </tr>

                          <tr>
                            <th scope="row" colSpan="4" className="border-0 text-end">
                              Discount :</th>
                            <td className="border-0 text-end">- 100</td>
                          </tr>

                          

                          <tr>
                            <th scope="row" colSpan="4" className="border-0 text-end">
                              Tax :</th>
                            <td className="border-0 text-end">100</td>
                          </tr>

                          <tr>
                            <th scope="row" colSpan="4" className="border-0 text-end">Total(Rs):</th>
                            <td className="border-0 text-end"><h6 className="m-0 fw-semibold">1298</h6></td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                    {/* <div className="d-print-none mt-4">
                      <div className="float-end">
          
                        <a href="#" className="btn btn-lg btn-primary ">Send</a>
                      </div>
                    </div> */}
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
