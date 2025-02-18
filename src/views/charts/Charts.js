import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
} from '@coreui/react-chartjs'
import {

  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton
} from '@coreui/react'
import { DocsCallout } from 'src/components'

const Charts = () => {
  const token = sessionStorage.getItem("admintoken");
      const [productdata, setproductdata] = useState([])
      const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    

      useEffect(() => {
        axios.get(ROOT_URL+'/api/admin/viewProducts',{
          headers: {
            Authorization: `Bearer ${token}`,
          },
      })
        
        .then((productdata) =>{
          setproductdata(productdata.data.products);
          console.log(productdata.data.products);
        } )
        .catch((err) =>{
           console.log(err)
            
         }
        )
         
    }, []);

  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
          <div className='row'>
            <div className='col-lg-6'>Bar Chart</div>
            <div className='col-lg-6 text-end'>
              <CButton>Week</CButton>
              <CButton>Month</CButton>
              <CButton>Year</CButton>
            </div>
          </div></CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'sept'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40,90,50],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
     <CCol>
     <CCard className="mb-4">
     <CCardHeader>Products stock</CCardHeader>
     <CTable responsive="sm" color="dark" >
                     <CTableHead>
                       <CTableRow>
                         <CTableHeaderCell scope="col" colSpan="3">Product name</CTableHeaderCell>
                         <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                         <CTableHeaderCell scope="col">bvPoints</CTableHeaderCell>
                         <CTableHeaderCell scope="col">Stock</CTableHeaderCell>
                        
                       </CTableRow>
                     </CTableHead>
                     <CTableBody>
                     
                                      {
                                       productdata.map((product) => {
                                         return <CTableRow active key={product._id} >
                                           
                                             <CTableDataCell colSpan="3">{product.name}</CTableDataCell>
                                            
                                             <CTableDataCell>{product.price}</CTableDataCell>
                                             <CTableDataCell>{product.bvPoints}</CTableDataCell>
                                             <CTableDataCell>{product.stock}</CTableDataCell>
                         
                                         </CTableRow>
                                       })
                                      }
                     </CTableBody>
                   </CTable>
     </CCard>
     </CCol>
                   
                 
     
    </CRow>
  )
}

export default Charts
