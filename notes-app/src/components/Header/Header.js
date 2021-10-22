const Header = () => {

    return (
        <header>
            <nav className="navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" href="/notes">Notes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/posts">Posts</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;