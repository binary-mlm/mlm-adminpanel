import React, { useState,useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import swal from 'sweetalert';

const WidgetsDropdown = (props) => {
  const navigate = useNavigate()
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [userdata, setuserdata] = useState([])
  const [coursedata, setcoursedata] = useState([])
  const [totaldata, settotaldata] = useState(0)
  const [data, setData] = useState({
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 
      'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Monthly Order Amounts',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: Array(12).fill(0), // Initialize with zeros for each month
        barPercentage: 0.6,
      },
    ],
  });
  useEffect(() => {
    const fetchMonthlyTotals = async () => {
      try {
        const response = await axios.get(ROOT_URL+'/api/auth/getmonthlytotal');
        const monthlyTotals = response.data;

        const updatedData = { ...data };
        monthlyTotals.forEach(item => {
          const monthIndex = item._id.month - 1;
          updatedData.datasets[0].data[monthIndex] = item.totalAmount;
        });

        setData(updatedData);
        console.log(data);
      } catch (error) {
        console.error('Error fetching the monthly totals:', error);
      }
    };

    fetchMonthlyTotals();
  }, []);

  useEffect(() =>{
    const Admintoken = localStorage.getItem('admintoken');
      axios.get(ROOT_URL+'/api/auth/getuser',{
          headers: {
            Authorization: `Bearer ${Admintoken}`,
          }
          })
      .then(userdata => setuserdata(userdata.data.data))
      .catch((err) =>{
        console.log(err);
        swal("Session Expired!", "Your session has expired. Please log in again to continue.", "warning");
        localStorage.removeItem('Admintoken');
        navigate('/');
      } )    
  }, []);
  useEffect(() =>{
      axios.get(ROOT_URL+'/api/v1/get_course')
      .then(coursedata => setcoursedata(coursedata.data.data))
      .catch((err) =>{
        console.log(err);
      })    
  }, []);
  useEffect(() =>{
    axios.get(ROOT_URL+'/api/auth/gettotalamount')
    .then(totaldata => settotaldata(totaldata.data.totalAmount))
    .catch((err) =>{
      console.log(err);
    })    
}, []);
  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3} >
        <CWidgetStatsA className='widgetheight'
          color="primary"
          title=" Total Users"
          value={
            <>
              <span className='h2'>{userdata.length}</span>
            </>
          }  
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA className='widgetheight'
          color="info"
          value={
            <>
              <span className="h2">
                {coursedata.length}
              </span>
            </>
          }
          title="Total Courses"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA className='widgetheight'
          color="warning"
          value={
            <>
             
              <span className="h2">
              {totaldata}
              </span>
            </>
          }
          title="Total amount"
        
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="danger"
          // value={
          //   <>
             
          //     <span className="fs-6 fw-normal">
          //       {data.data}
          //     </span>
          //   </>
          // }
          title="Month wise total amount"
          // action={
          //   <CDropdown alignment="end">
          //     <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
          //       <CIcon icon={cilOptions} />
          //     </CDropdownToggle>
          //     <CDropdownMenu>
          //       <CDropdownItem>Action</CDropdownItem>
          //       <CDropdownItem>Another action</CDropdownItem>
          //       <CDropdownItem>Something else here...</CDropdownItem>
          //       <CDropdownItem disabled>Disabled action</CDropdownItem>
          //     </CDropdownMenu>
          //   </CDropdown>
          // }
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={data}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    border: {
                      display: false,
                    },
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
