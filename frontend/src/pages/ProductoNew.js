import React from 'react';

import ProductoForm from '../components/ProductoForm';
import api from "../api";

class ProductoNew extends React.Component {
  state = {
    form: {
      nombre: '',
      valor: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    let obj = {
      producto: this.state.form
    }
    try {
      api.producto.create(obj);
    } catch (error) {
      this.setState({  error: error })
      
    }
    alert('successfully added product');
    this.setState({
      form: {
        nombre: '',
        valor: '',
      },
    });
   
  };

  render() {
    return (
      <React.Fragment>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <ProductoForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductoNew;
