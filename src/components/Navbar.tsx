import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-dark fw-bold" href="/">E‑Shop</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" onClick={navigateToCart}>Cart</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/employees">Employees</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar