import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/' component={Greeting}/>
      </Router>
    </div>
  );
}

export default App;
