import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';  
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils'; 

class App extends React.Component {
  
  constructor(){ 
    super(); 

    this.state = {
      currentUser: null 
    }
  }

  unsubscribeFromAuth = null; 

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' render={HomePage}></Route>
          <Route path='/shop' render={ShopPage}></Route>
          <Route path='/signin'> <SignInAndSignUpPage></SignInAndSignUpPage></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
