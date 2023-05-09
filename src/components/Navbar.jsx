import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/">
          Inicio
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto">
          Contacto
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/blog">
          Blog
        </NavLink>
      </div>
      <h1>App</h1>
    </div>
  );
};

export default Navbar;
