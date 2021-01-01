import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js'
import Home from './Home'
import { Route, useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();

  const greet = () => {
    history.push('/greeting')
  }
  
  const home = () => {
    history.push('/')
  }
  
  return (
    <div className="App">
      <h1 onClick={greet}>Greeting</h1>
      <h1 onClick={home}>Home</h1>
      <Route exact path='/' component={Home}/>
      <Route exact path='/greeting' component={Greeting} />
    </div>
  );
}

export default App;
