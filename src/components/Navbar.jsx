import React from "react";
import { NavLink } from "react-router-dom";

import Wrapper from "../assets/wrappers/Navbar.js";

const Navbar = () => {
    return (
        <Wrapper>
            <div className="nav-center">
                <span className="logo">
                    Mix<span className="logo-transition">M</span>aster
                </span>
                <div className="nav-links">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        About
                    </NavLink>
                    <NavLink to="/newsletter" className="nav-link">
                        Newsletter
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
