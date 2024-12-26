import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../Image/udbhab_icon.png'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { CButton , CTable , CTableBody, CTableDataCell , CTableHead, CTableRow, CTableHeaderCell} from '@coreui/react'
const Userinvoice = () => {
  const location = useLocation()
  const { franchiseId, order } = location.state
  const invoicepdf = useRef()
  const total_Amount = order.products.reduce((total, product) => total + product.totalAmount, 0)
  const downloadPDF = () => {
    const input = invoicepdf.current;

    html2canvas(input, {
      useCORS: true, // Enables cross-origin images
      scale: 2, // Higher scale for better quality
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')

      // Calculate width and height based on the A4 page size
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      // Calculate image aspect ratio to match the full-page dimensions
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)

      // Calculate final dimensions
      const finalWidth = imgWidth * ratio
      const finalHeight = imgHeight * ratio

      // Add image to PDF with calculated dimensions
      pdf.addImage(imgData, 'PNG', 0, 0, finalWidth, finalHeight)
      pdf.save('invoice.pdf')
      alert('PDF successfully saved')
    })
  }
  return (
   <>
    <div className="invoice">
        <div className="container">
          <div className="invoice-action text-end mt-2">
            <CButton className="btn btn-success p-2 mt-5 text-white" onClick={downloadPDF}>
              <i className="fa fa-download"> Download</i>
            </CButton>
          </div>
          <div className="row mt-2">
            <div className="col-lg-12">
              <div ref={invoicepdf}>
                <div
                  className="card w-100 mb-4 text-center"
                  style={{ backgroundColor: 'white', color: 'black' }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6 invoice-title text-start mt-3">
                        <div>
                          <span className="h4">Udbhab Marketing Private Limited</span>
                        </div>
                        <div className="mt-2">
                          <p className="mb-1">
                            Indira Nagar Sodepur, North 24 Parganas, Kolkata-700110
                          </p>
                          <p className="mb-1">
                            <i className="uil uil-envelope-alt me-1"></i>Email: support@myudbhab.in
                          </p>
                          <p>
                            <i className="uil uil-phone me-1"></i>+(91)7980964516
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 text-end mt-2">
                        <img className="img-fuild" src={logo} width={140} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6 text-start">
                        <div>
                          <h5 className="font-size-16 mb-1">From:</h5>
                          <p className="mb-1"> Udbhab Marketing Private Limited</p>
                          <p className="mb-1">Email: support@myudbhab.in</p>
                          <p>+(91)7980964516</p>
                        </div>
                      </div>

                      <div className="col-sm-6 d-flex justify-content-end">
                        <div>
                          <h5 className="font-size-16 mb-1 ms-1">To:</h5>
                          <h5 className="font-size-15 mb-2">{order.userDetails.userName}</h5>
                         
                          {/* <p className="mb-1">Email: Subham@gmail.com</p>
                          <p>Ph no: 7878522452</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <h5 className="font-size-15 text-start">Order Summary</h5>

                      <div className="table-responsive">
                        <CTable className=" align-middle mb-0 table_style">
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell className="text-start">Product Name</CTableHeaderCell>
                              <CTableHeaderCell>Quantity</CTableHeaderCell>
                              <CTableHeaderCell>Price</CTableHeaderCell>
                              <CTableHeaderCell>Total Amount</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {order.products.map((product) => (
                              <CTableRow key={product._id}>
                                <CTableDataCell className="text-start">{product.name}</CTableDataCell>
                                <CTableDataCell className="text-center">{product.quantity}</CTableDataCell>
                                <CTableDataCell>{product.price}</CTableDataCell>
                                <CTableDataCell>{product.totalAmount}</CTableDataCell>
                              </CTableRow>
                            ))}
                            <CTableRow>
                              <CTableDataCell colSpan="3" className="text-end">
                                
                              </CTableDataCell>
                              <CTableDataCell className="text-left">
                                <h5>
                                  <strong>Total: <i className="fa fa-inr"></i>{total_Amount}/-
                                  </strong>
                                </h5>
                              </CTableDataCell>
                            </CTableRow>
                          </CTableBody>
                        </CTable>
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

export default Userinvoice