import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'; 

const HatsPage = () => (
  <div>
    <h1>HATS Page </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={HomePage}></Route>
        <Route  path='/shop/hats' render={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
