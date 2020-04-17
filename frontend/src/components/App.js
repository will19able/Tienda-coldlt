import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import NotFound from '../pages/NotFound';
import ProductoNew from '../pages/ProductoNew';
import ProductoEdit from "../pages/ProductoEdit";
import Productos from "../pages/Productos";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ProductoNew} />
          <Route exact path="/Producto/list" component={Productos} />
          <Route exact path="/Producto/new" component={ProductoNew} />
          <Route exact path="/Producto/edit/:codigo" component={ProductoEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
