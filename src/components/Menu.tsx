import React from "react"
import { Link } from "gatsby"
import menuItems from "../data/menu"

interface MenuItem {
  title: string
  path: string
}

const Menu = () => {
  return (
    <ul>
      {menuItems.map((item: MenuItem) => {
        const { title, path } = item
        return (
          <li key={path}>
            <Link to={`/${path}`}>{title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
