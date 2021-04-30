import React from 'react'
import { Link } from 'react-router-dom'
 export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to='/' className="navbar-brand">
                  Image Gallery
          </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
             <Link to='/' className="nav-link">Home</Link>
              <span className="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <Link to ="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
