import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import {
  CRow,
  CCol,
  CWidgetStatsA,
} from '@coreui/react';

const WidgetsDropdown = (props) => {
  const navigate = useNavigate();
  const widgetChartRef1 = useRef(null);
  const widgetChartRef2 = useRef(null);
  const [userdata, setuserdata] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [totalPup, settotalpup] = useState(0);

  const token = sessionStorage.getItem("admintoken");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    axios
      .get(`${ROOT_URL}/api/admin/viewProducts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setproductdata(response.data.products);
        console.log(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });

      total();
  }, []);

  const total = async () => {
    await totalpup();
    await total_userdata();
  };

  const totalpup = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/api/admin/getAllFranchies`);
      console.log(response.data);
      settotalpup(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const total_userdata = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/api/franchise/getAllUsers`);
      console.log(response.data);
      setuserdata(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={4}>
        <CWidgetStatsA
          className="widgetheight"
          color="primary"
          title="Total Users"
          value={<span className="h2">{userdata.length}</span>}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={4}>
        <CWidgetStatsA
          className="widgetheight"
          color="info"
          value={<span className="h2">{productdata.length}</span>}
          title="Total Products"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={4}>
        <CWidgetStatsA
          className="widgetheight"
          color="warning"
          value={
            totalPup.length ? (
              <span className="h2">{totalPup.length}</span>
            ) : (
              <span>Total length</span>
            )
          }
          title="Total PUP"
        />
      </CCol>
    </CRow>
  );
};

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
};

export default WidgetsDropdown;
