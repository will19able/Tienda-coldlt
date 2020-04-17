import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <span className="font-weight-light">Tienda</span>
            <span className="font-weight-bold">Coldlt</span>
          </Link>
          <Link className="Navbar__brand" to="/Producto/new">
            <button className="btn btn-primary"> Nuevo Producto</button>
          </Link>
          <Link className="Navbar__brand" to="/Producto/list">
            <button className="btn btn-primary"> Lista Producto</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
