import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import   {CButton,
  } from '@coreui/react'
const Franchiseinvoice = () => {
    const invoicepdf = useRef();

  const downloadPDF = () => {
    const input = invoicepdf.current;

    html2canvas(input, {
        useCORS: true,    // Enables cross-origin images
        scale: 2          // Higher scale for better quality
    }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        // Calculate width and height based on the A4 page size
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // Calculate image aspect ratio to match the full-page dimensions
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

        // Calculate final dimensions
        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;

        // Add image to PDF with calculated dimensions
        pdf.addImage(imgData, 'PNG', 0, 0, finalWidth, finalHeight);
        pdf.save('invoice.pdf');
        alert("PDF successfully saved");
    });
};
  return (
<>
<div className="invoice">
        <div className="container">
          <div className="invoice-action text-end mt-2">
            <CButton className="btn p-3 mt-5" onClick={downloadPDF}>
              <i className="fa fa-download"> </i>
            </CButton>
          </div>
          <div className="row mt-2">
            <div className="col-lg-12">
              <div ref={invoicepdf}>
                <div
                  className="card w-100 mb-4 text-center"
                
                >
                  <div
                    className="card-body"
                   
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        {/* <img className="img-fluid" src={logo} width={160} alt="Udbhab Logo" /> */}
                        <h4>Udbhab Marketing Private Limited</h4>
                      </div>
                    </div>

                    <div className="col-sm-7 invoice-title text-start mt-3">
                      <div>
                        <span className="h4">
                          Udbhab Marketing Private Limited
                        </span>
                      </div>
                      <div className="mt-2">
                        <p className="mb-1">Indrira Nagar Sodepur, North 24 Parganas, Kolkata-700110</p>
                        <p className="mb-1">
                          <i className="uil uil-envelope-alt me-1"></i>Email: support@myudbhab.in
                        </p>
                        <p>
                          <i className="uil uil-phone me-1"></i>+(91)7980964516
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6 text-start">
                        <div>
                          <h5 className="font-size-16 mb-1">From:</h5>
                          <h5 className="font-size-15 mb-2">Srijani Banerjee</h5>
                          <p className="mb-1">Howrah, West Bengal</p>
                          <p className="mb-1">Email: srijani.banerjee2000@gmail.com</p>
                          <p>Ph no: 8584062451</p>
                        </div>
                      </div>

                      <div className="col-sm-6 d-flex justify-content-end">
                        <div>
                          <h5 className="font-size-16 mb-1 ms-1">To:</h5>
                          <h5 className="font-size-15 mb-2">Subham Sarkar</h5>
                          <p className="mb-1">Solmarg, Kashmir</p>
                          <p className="mb-1">Email: Subham@gmail.com</p>
                          <p>Ph no: 7878522452</p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <h5 className="font-size-15 text-start">Order Summary</h5>

                      <div className="table-responsive">
                        <table className="table align-middle table-striped table-centered mb-0 table-group-divider">
                          <thead>
                            <tr className="text-center">
                              <th className="text-start">Product Name</th>
                              <th className="text-start">SKU code</th>
                              <th className="text-start">MRP</th>
                              <th className="text-start">GST</th>
                              <th className="text-start">Quantity</th>
                              <th className="text-center">Total BV</th>
                              <th className="text-center">Total MRP</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-start">Udbhab Face Wash</td>
                              <td className="text-start">UD123456</td>
                              <td className="text-start">200</td>
                              <td className="text-start">20</td>
                              <td className="text-start">10</td>
                              <td className="text-center">10</td>
                              <td className="text-center">300</td>
                            </tr>
                            <tr>
                              <th scope="row" colSpan="6" className="text-uppercase text-end">
                                Grand Total:-
                              </th>
                              <td>495.1/-</td>
                            </tr>
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

export default Franchiseinvoice