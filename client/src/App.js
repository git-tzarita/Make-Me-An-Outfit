import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

import OutfitEdit from './components/OutfitEdit';
import OutfitUpload from './components/OutfitUpload';
import OutfitList from './components/OutfitList';
import Header from './components/Header';

import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Make Me a Outfit</h2>
        </div>
        <Header />
        <main>
          <Switch>
            <Route path='/OutfitEdit' component={OutfitEdit} />
            <Route path='/OutfitList' component={OutfitList} />
            <Route path='/OutfitUpload' component={OutfitUpload} />
            <Redirect to= '/' />
          </Switch>
        </main>
        <div className="propstest">
          <OutfitList / >
          <OutfitUpload / >
        </div>
      </div>
    );
  }
}

export default App;
