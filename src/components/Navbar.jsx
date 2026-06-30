import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold text-success fs-3" to="/">
          🍽️ ResQPlate
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <Link className="btn btn-success" to="/add">
                Donate Food
              </Link>
            </li>


            <li className="nav-item ms-lg-2">
              <Link className="btn btn-outline-success" to="/ngo">
                NGO Dashboard
              </Link>
            </li>

            <li className="nav-item ms-lg-2">
              <Link className="btn btn-outline-primary" to="/volunteer">
                Volunteer
              </Link>
            </li>

            <li className="nav-item ms-lg-2">
              <Link className="btn btn-outline-dark" to="/impact">
                Impact
              </Link>
            </li>


          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;