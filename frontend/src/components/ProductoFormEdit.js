import React from 'react';

class ProductoFormEdit extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  

  render() {
    return (
      <div>
        <h1>Editar Producto</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="nombre"
              value={this.props.formValues.nombre}
            />
          </div>

          <div className="form-group">
            <label>valor</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="valor"
              value={this.props.formValues.valor}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Editar
          </button>
        </form>
      </div>
    );
  }
}

export default ProductoFormEdit;
