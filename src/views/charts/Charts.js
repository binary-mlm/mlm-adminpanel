import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CCard, CCardBody, CCol, CCardHeader, CRow, CButton , CTable  , CTableHead, CTableRow , CTableBody, CTableHeaderCell , CTableDataCell} from '@coreui/react';
import { CChartBar } from '@coreui/react-chartjs';

const Charts = () => {
  const token = sessionStorage.getItem("admintoken");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  
  const [apiData, setApiData] = useState(null);
  const [chartType, setChartType] = useState("month"); // Default: Month
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [productdata, setproductdata] = useState([])
  


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

  useEffect(() => {
    axios.get(ROOT_URL + '/api/admin/purchase-stats'
    )
    .then((response) => {
      setApiData(response.data); 
      processData(response.data, "month");  // Default to monthly data
    })
    .catch((err) => console.log(err));
  }, []);

  // Function to process API data
  const processData = (data, type) => {
    let labels = [];
    let values = [];

    if (!data || !data.monthlyStats) return;

    if (type === "month") {
      labels = Object.keys(data.monthlyStats);
      values = labels.map((month) => data.monthlyStats[month].totalAmount);
    } 
    else if (type === "week") {
      const weeks = [];
      const amounts = [];
      Object.values(data.monthlyStats).forEach(month => {
        Object.entries(month.weeks).forEach(([week, details]) => {
          weeks.push(week);
          amounts.push(details.totalAmount);
        });
      });
      labels = weeks;
      values = amounts;
    } 
    else if (type === "year") {
      let yearTotals = { "2024": 0, "2025": 0 }; // Store totals for each year
    
      Object.keys(data.monthlyStats).forEach((month) => {
        const [monthName, year] = month.split(" "); // Extract month and year
        const totalAmount = data.monthlyStats[month].totalAmount || 0;
    
        if (year === "2024") {
          yearTotals["2024"] += totalAmount; // Sum for 2024
        } else if (year === "2025") {
          yearTotals["2025"] += totalAmount; // Sum for 2025
        }
      });
    
      labels = Object.keys(yearTotals); // ["2024", "2025"]
      values = Object.values(yearTotals); // [Total for 2024, Total for 2025]
    }
    

    setChartLabels(labels);
    setChartData(values);
  };

  return (
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className='row'>
              <div className='col-lg-6'>Bar Chart</div>
              <div className='col-lg-6 text-end'>
                <CButton onClick={() => { setChartType("week"); processData(apiData, "week"); }}>Week</CButton>
                <CButton onClick={() => { setChartType("month"); processData(apiData, "month"); }}>Month</CButton>
                <CButton onClick={() => { setChartType("year"); processData(apiData, "year"); }}>Year</CButton>
              </div>
            </div>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: chartLabels,
                datasets: [
                  {
                    label: `Total Amount by ${chartType}`,
                    backgroundColor: '#f87979',
                    data: chartData,
                  },
                ],
              }}
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
  );
};

export default Charts;
