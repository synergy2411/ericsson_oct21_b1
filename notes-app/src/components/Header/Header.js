import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {

    return (
        <header>
            <nav className="navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/notes">Notes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/posts">Posts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/counter">Counter</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;