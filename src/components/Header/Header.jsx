import NavLink from "../NavLink/NavLink";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <h2 className="header-text">Ron Miller</h2>
            <nav className="nav-bar">
                <NavLink to="/about-me">About Me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </header>
    );
}