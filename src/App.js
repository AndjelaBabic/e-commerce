import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';  
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={HomePage}></Route>
        <Route path='/shop' render={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
