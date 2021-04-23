
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import About from './pages/About'

import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
    <Navbar/>
     <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route exact path="/about">
           <About/>
        </Route>
     </Switch>
   </Router>
  );
}

export default App;
