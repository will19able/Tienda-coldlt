import React from 'react';
import api from "../api";
import './styles/Badges.css';
import ProductoList from "../components/ProductoList";

class Productos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData= async () => {
    this.setState( { error:null })

    try {
        const data = await api.producto.list();
        this.setState({ data: data.body })
        
        
    } catch (error) {
        this.setState({  error: error })
        
    }
  }
  componentDidUpdate(prevProps, prevState) {
    
  }

  componentWillUnmount() {
  }

  render() {
    
    return (
      <React.Fragment>
    

        <div className="Badges__container">

          <ProductoList productos={this.state.data} />
          
        </div>
      </React.Fragment>
    );
  }
}

export default Productos;
