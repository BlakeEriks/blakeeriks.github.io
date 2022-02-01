/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import "../styles/mains.scss"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="global-container">
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  )
}
export default Layout
