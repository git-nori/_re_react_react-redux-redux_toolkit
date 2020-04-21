import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  const render = () => {
    switch (location.pathname) {
      case '/quiz':
        return <Link to="/home">Home</Link>
        break;
      case '/home':
        return <Link to="/quiz">Quiz</Link>
        break;
      default:
        break;
    }
  }

  return (
    <div className={"header"}>
      {render()}
    </div>
  )
}

export default Header