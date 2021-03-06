import React,  { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/cover-page/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { useSelector, useDispatch } from "react-redux";
import {  checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout.component";

const App = () => {

  const currentUser = useSelector(selectCurrentUser); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(checkUserSession());
  }, [ dispatch ])

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={HomePage}></Route>
          <Route path="/shop" component={ShopPage}>
          </Route>
          <Route exact path="/checkout" > <CheckoutPage></CheckoutPage></Route>
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}></Route>
        </Switch>
      </div>
    );
}

export default App;
