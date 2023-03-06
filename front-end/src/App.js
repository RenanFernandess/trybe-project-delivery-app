import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login, {
  CustomerOrders,
  Products,
  Register,
  OrderDetails,
  Checkout,
  AdminPage,
} from './pages';

function App() {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => <Redirect to="/login" { ...props } /> }
        />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders" component={ CustomerOrders } />
        <Route exact path="/seller/orders" component={ CustomerOrders } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
        <Route exact path="/seller/orders/:id" component={ OrderDetails } />
        <Route exact path="/admin/manage" component={ AdminPage } />
      </Switch>
    </main>
  );
}

export default App;
