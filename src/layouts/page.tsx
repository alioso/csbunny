import React from "react"

import Header from "../components/Header"

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
