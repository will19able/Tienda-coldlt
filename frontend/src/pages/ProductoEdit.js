import React from 'react';

import ProductoFormEdit from '../components/ProductoFormEdit';
import api from "../api";

class ProductoEdit extends React.Component {
  state = {
    form: {
      codigo : '',
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
      api.producto.update(obj, this.props.match.params.codigo);
    } catch (error) {
      this.setState({  error: error })
      
    }
    alert('successfully update product');
   
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData= async () => {
    this.setState( { error:null })

    try {
        const data = await api.producto.read(
          this.props.match.params.codigo
        );
        const newDta = data.body[0]
        this.setState({ form: newDta })
        
        
    } catch (error) {
        this.setState({  error: error })
        
    }
  }

  render() {
    return (
      <React.Fragment>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <ProductoFormEdit
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

export default ProductoEdit;
