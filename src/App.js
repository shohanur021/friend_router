import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {

  return (
    <div >
        <Router>
          <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/friend/:friendId">
                 <FriendDetails/>
            </Route>
            <Route exact path="/">
                 <Home/>
            </Route>
            <Route path="*">
                <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
