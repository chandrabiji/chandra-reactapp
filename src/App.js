import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
function App() {
 
  return (
    <Router>
      <div className="App">
        <Menu />

      </div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
