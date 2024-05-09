import { Link } from 'react-router-dom';
import './NavLink.css';

export default function NavLink({ to, children }) {
    return <Link to={ to } className="nav-link">
        { children }
    </Link>;
}