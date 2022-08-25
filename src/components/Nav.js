function Nav() {
    return (

        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top mb-5 shadow pb-4 d-flex align-items-center">
            <div className="container">
                <a className="navbar-brand" href="#">Mobile Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <b>My Bag</b>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">My Cart <span className="badge bg-info">0</span></a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">My Wishlist <span className="badge bg-success">0</span></a>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    );
}

export default Nav;