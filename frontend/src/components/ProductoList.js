import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';
import api from "../api";
class BadgesListItem extends React.Component {
  
  deleteRow (id, e) {
    try {
      api.producto.remove(id);
    } catch (error) {
      this.setState({  error: error })
      
    }
    alert('successfully delete product');
    window.location.replace('');
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="BadgesListItem">
            <img
              className="BadgesListItem__avatar"
              src="https://www.gravatar.com/avatar?d=identicon"
              alt={`producto${this.props.badge.codigo}`}
            />

            <div>
              <strong>
              {this.props.badge.nombre}
              </strong>
              <br />Valor : {this.props.badge.valor}
              <br />
            </div>
          </div>
        </div>
        <div className="col-2">
          <Link to={`/Producto/edit/${this.props.badge.codigo}`}>
            <button className="btn btn-primary"> Editar</button>
          </Link>
        </div>
        <div className="col-2">
            <button onClick={(e) => this.deleteRow(this.props.badge.codigo, e)} className="btn btn-primary">Eliminar</button>
        </div>
      </div>
    );
  }
}

class ProductosList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.productos.map(badge => {
            return (
              <li key={badge.codigo}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductosList;
