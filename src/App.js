import React, { Component } from "react";
import { ProductsContextProvider } from "./Global/ProductsContext";
import { Home } from "./Components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";
import { NotFound } from "./Components/NotFound";
import { auth, db } from "./Config/Config";
import { CartContextProvider } from "./Global/CartContext";
import { Cart } from "./Components/Cart";
import { AddProducts } from "./Components/AddProducts";
import { Cashout } from "./Components/Cashout";

export class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    //   GET USER INFO FOR NAVIGATION BAR

    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.data().Name);
              this.setState({
                user: doc.data().Name,
              });
            });
          });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Home user={this.state.user} />}
              />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route
                path="/cartproducts"
                component={() => <Cart user={this.state.user} />}
              />
              <Route path="/addproducts" component={AddProducts} />
              <Route
                path="/cashout"
                component={() => <Cashout user={this.state.user} />}
              />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    );
  }
}

export default App;
