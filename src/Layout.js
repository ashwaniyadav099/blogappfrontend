import { Outlet } from 'react-router';
import React from 'react'
import Header from './Component/Header';

const Layout = (props) => {
  return (
    <React.Fragment>
        <div> <Header/> </div>
        <div><Outlet/></div>
        <div> {'footer'} </div>
    </React.Fragment>
  )
}

export default Layout