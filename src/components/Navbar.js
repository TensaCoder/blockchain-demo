import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import '../CSS/Navbar.css'

const Navbar = () => {
    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark d-flex justify-content-center">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Blockchain Demo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        {/* <li className="nav-item px-2">
                            <Link className={`nav-link ${location.pathname==="/intro"? "active": ""}`} to="/intro">intro</Link>
                        </li> */}

                        <li className="nav-item px-2">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li>

                        <li className="nav-item px-2">
                            <Link className={`nav-link ${location.pathname==="/simulation"? "active": ""}`} aria-current="page" to="/simulation">Simulation</Link>
                        </li>

                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar