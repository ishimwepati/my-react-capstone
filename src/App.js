// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import Home from './components/Home';
import CategoryDetails from './components/CategoryDetails';
import GameDetails from './components/GameDetails'; // Import your GameDetails component
import ItemDetail from './components/ItemDetail'; // Update the path to match your project structure



function App() {
  return (
    <Provider store={store}> {/* Wrap your entire app with Provider */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:gameID" component={GameDetails} />
          <Route path="/category/:categoryID" component={CategoryDetails} />
          <Route path="/item/:categoryID" component={ItemDetail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
