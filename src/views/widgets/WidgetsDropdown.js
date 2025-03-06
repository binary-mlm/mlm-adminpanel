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
  
  const [userdata, setuserdata] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [totalPup, settotalpup] = useState(0);
  const [totalordersamount , setttotalordersamount] = useState([]);

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
    await total_ordersamount();
  };
const total_ordersamount = async () => {
  try {
    const response = await axios.get(`${ROOT_URL}/api/admin/purchase-stats`);
    console.log(response.data);
    setttotalordersamount(response.data);
  } catch (err) {
    console.log(err);
  }
}
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
      const response = await axios.get(`${ROOT_URL}/api/auth/handleAllUser`);
      console.log(response.data);
      setuserdata(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const activeUsersCount = userdata.filter(user => user.isActive).length;
  const inactiveUsersCount = userdata.filter(user => !user.isActive).length;

  return (
    <>
    <CRow className={props.className} xs={{ gutter: 4 }}>
    <CCol sm={6} xl={3} xxl={3}>
        <CWidgetStatsA
          className="widgetheight"
          color="success"
          title="Active Users"
          value={<span className="h2">{activeUsersCount}</span>}
        />
      </CCol>
      <CCol sm={6} xl={3} xxl={3}>
        <CWidgetStatsA
          className="widgetheight"
          color="danger"
          title="Inactive Users"
          value={<span className="h2">{inactiveUsersCount}</span>}
        />
      </CCol>
      
      <CCol sm={6} xl={3} xxl={3}>
        <CWidgetStatsA
          className="widgetheight"
          color="info"
          value={<span className="h2">{productdata.length}</span>}
          title="Total Products"
        />
      </CCol>
      <CCol sm={6} xl={3} xxl={3}>
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
    <CRow className={props.className} xs={{ gutter: 4 }}>
    <CCol sm={6} xl={3} xxl={3}>
        <CWidgetStatsA
          className="widgetheight"
          color="success"
          title="Today's order"
          value={<span className="h2">{totalordersamount.dailyTotal}/-</span>}
        />
      </CCol>
      <CCol sm={6} xl={3} xxl={3}>
        <CWidgetStatsA
          className="widgetheight"
          color="danger"
          title="Weekly orders"
          value={<span className="h2">{totalordersamount.weeklyTotal}/-</span>}
        />
      </CCol>
      
      <CCol sm={6} xl={3} xxl={3}>
        <CWidgetStatsA
          className="widgetheight"
          color="info"
          value={<span className="h2">{totalordersamount.monthlyTotal}/-</span>}
          title="Monthly orders"
        />
      </CCol>
      <CCol sm={6} xl={3} xxl={3}>
        <CWidgetStatsA
          className="widgetheight"
          color="warning"
          value={
            totalPup.length ? (
              <span className="h2">{totalordersamount.overallTotal}/-</span>
            ) : (
              <span>Total length</span>
            )
          }
          title="Total orders"
        />
      </CCol>
      
    </CRow>
    </>
  );
};

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
};

export default WidgetsDropdown;
