import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" >DreamCatchers Bar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/articles">Articles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chat">Chat</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}

export default Header;