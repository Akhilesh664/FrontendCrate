import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
class Footer extends Component {
    render() {
        return (
           <div className="container-fluid footer">
            <div className="row">
                <div className="col-md-4">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </div>
           </div>
        );
    }
}

export default Footer;
