// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import CategoryDetails from './components/CategoryDetails';
import GameDetails from './components/GameDetails';
import ItemDetail from './components/ItemDetail';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      {' '}
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:gameID" component={GameDetails} />
            <Route path="/category/:categoryID" component={CategoryDetails} />
            <Route path="/item/:categoryID" component={ItemDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
