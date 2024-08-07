import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
 import pic1 from "../../Image/userphoto.jpg"

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { SideNav } from './SideNav'
import navigation from './nav'
import { sygnet } from '../../assets/brand/sygnet'
export const Sidebar = () => {
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)
    const teachername = sessionStorage.getItem('teachername');
  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
        <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/"  className="text-center" style={{textDecoration:"none"}}>
        <div className='text-center'>
        <img src={pic1}  width={70}/>
        </div>
          <h3 className='text-center ms-3'>{teachername}</h3>
          {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} /> */}
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        {/* <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        /> */}
      </CSidebarHeader>
      <SideNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
   
  )
}

// export default React.memo(Sidebar)