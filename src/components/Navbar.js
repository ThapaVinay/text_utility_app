import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? '    light' : 'dark'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/text_utility_app">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/text_utility_app">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/text_utility_app/about">About</Link>
                        </li>
                    </ul>

                    {/* SEARCH BAR */}
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}


                    {/* SWITCH FOR DARK MODE */}
                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div> */}  
                    
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dark Mode
                        </button>
                        <ul className="dropdown-menu " style = {{minWidth:'120px'}}>
                            <li><button type="button" className="dropdown-item" onClick = {() => props.toggleMode('blue')}> Blue </button></li>
                            <li><button type="button" className="dropdown-item" onClick = {() => props.toggleMode('grey')}> Grey </button></li>
                            <li><button type="button" className="dropdown-item" onClick = {() => props.toggleMode('green')}> Green </button></li>
                            <li><button type="button" className="dropdown-item" onClick = {() => props.toggleMode('light')}> Light </button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}

// it is used to make sure that the send title is string only
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// set the default value for the title
Navbar.defaultProps = {
    title: "Enter your title"
}