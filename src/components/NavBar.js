function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://localhost:3000/">
          FurnitureStore The oak
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="http://localhost:3000/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/">
                  Furniture
                </a>
              </li>
              <li>
                <a className="nav-link" href="http://localhost:3000/">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
