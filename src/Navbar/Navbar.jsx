import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">

            <Link className="nav-child" to="/">Home</Link>

            <Link className="nav-child" to="/about">About</Link>

            <Link className="nav-child" to="/contact">Contact</Link>

            <Link className="nav-child" to="/login">Login</Link>

            <Link className="nav-child" to="/register">Register</Link>



        </nav>
    )
}
export default Navbar