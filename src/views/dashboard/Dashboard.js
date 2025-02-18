/* eslint-disable prettier/prettiesweetalertr */
import React from 'react'


import {
  CCardFooter,
  
} from '@coreui/react'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
// import MainChart from './MainChart'
import Charts from "../charts/Charts"

const Dashboard = () => {

  
  // console.log(ROOT_URL)




  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <Charts/>
      
       
      
     
    
      <CCardFooter></CCardFooter>
    </>
  )
}

export default Dashboard
