import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about-us">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact-list">Contact List </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        );
    }
}

export default Header;
