import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'



export default function Navbar(props) {
    return (
        <div className="mix" style={{ color: props.mode !== 'white' ? 'white' : 'black' }}>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">{props.aboutText}</a>

                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}
                        {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div> */}
                        <div>
                            <span className="badge rounded-pill bg-primary mx-1" onClick={props.toggleBlue}>  </span>
                            <span className="badge rounded-pill bg-secondary mx-1" onClick={props.toggleDark}>  </span>
                            <span className="badge rounded-pill bg-success mx-1" onClick={props.toggleGreen}>  </span>
                            <span className="badge rounded-pill bg-danger mx-1" onClick={props.toggleRed}>  </span>
                            <span className="badge rounded-pill bg-warning mx-1" onClick={props.toggleYellow}>  </span>
                            <span className="badge rounded-pill bg-info mx-1" onClick={props.toggleCyan}>  </span>
                            <span className="badge rounded-pill bg-light mx-1" onClick={props.toggleLight}>  </span>
                            <span className="badge rounded-pill bg-dark mx-1" onClick={props.toggleBlack}>  </span>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired//to make it necessary
}
Navbar.defaultProps = {
    title: "Taskman title here",
    aboutText: "about text here"
}