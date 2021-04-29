
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import About from './pages/About'

import Navbar from './components/Navbar'
import ShowImg from './components/ShowImg'
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
        <Route path="/image/:id">
         <ShowImg/>
      </Route>
     </Switch>
   </Router>
  );
}

export default App;
