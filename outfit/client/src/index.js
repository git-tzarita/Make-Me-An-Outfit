import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// import Carousel from './components/Carousel';



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
