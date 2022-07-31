import React from "react"

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
            <a href={path}>{title}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
