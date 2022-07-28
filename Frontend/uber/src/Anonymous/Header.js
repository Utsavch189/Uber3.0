import React from 'react'

export default function Header() {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid ">
    <div>
      <a className="navbar-brand" href="#">Uber 3.0</a>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
