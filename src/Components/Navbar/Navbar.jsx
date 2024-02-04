import React from 'react'
import TopNav from './TopNav/TopNav'
import MiddleNav from './MiddleNav/MiddleNav'
import BottomNav from './BottomNav/BottomNav'

const Navbar = () => {
  return (
    <header className="header header-intro-clearance header-3">
        <TopNav/>
        <MiddleNav/>
        <BottomNav/>
    </header>
  )
}

export default Navbar
