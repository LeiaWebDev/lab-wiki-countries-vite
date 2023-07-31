import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {}
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>;
        <NavLink to="/countrydetailspage">Company Details</NavLink>;
        </div>
      
    </nav>

export default Navbar;
