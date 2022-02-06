import React, {useState} from 'react'

import "./navbar.css"

export const Navbar = () => {
    return (
        <>
            <nav id="vertical-menu">
                <div className="nav-header">
                    <img src={process.env.PUBLIC_URL + '/GMP.png'} alt="logo" className="header-icon"/>
                </div>
                <ul class="main-menu">
                    <li><a href="#"><i class="fa fa-envelope"></i>Link Item 1</a></li>
                    <li><a href="#"><i class="fa fa-cog"/>Link Item 3</a></li>
                    <li><a href="#"><i class="fa fa-graduation-cap"/>Link Item 5</a></li>
                    <li><a href="#"><i class="fa fa-search"/>Link Item 6</a></li>
                </ul>

                <div className="btn-wrapper">
                    <button className="sign-in-btn"><i class="fa fa-home"/>Sign In</button>
                    <p className='btn-seperator'>|</p>
                    <a href='#' className="sign-up-btn">Sign Up</a>
                </div>
            </nav>
        </>
    )
}

// export default Navbar;
