import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/pictures/logo.png";
import logoInstagram from "../../assets/pictures/instagram.png";
import '../Nav/nav.css';

function Nav() {
    const location = useLocation();
    const isGalleryPage = location.pathname.includes('/gallery');

    return (
        <nav id="nav">
            <NavLink to="/" >
                <img src={logo} alt="Logo" width="200" height="auto" />
            </NavLink>
            <ul style={{ fontSize: isGalleryPage ? '0.7rem' : 'initial' }}>
                <li><NavLink to="/" >Home</NavLink></li>
                {isGalleryPage && <li><NavLink to={location.pathname} className="active">Galerie</NavLink></li>}
                <li><NavLink to="/about" >À propos</NavLink></li>
                <li><NavLink to="/service" >Service</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
                <li>
                    <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank" className="social-link">
                        <img src={logoInstagram} alt="Logo Instagram" width="20" height="20" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
