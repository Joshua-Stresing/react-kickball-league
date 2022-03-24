import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Main/Main';
import Teams from './Views/Teams/Teams';
import Players from './Views/Players/Players';
import TeamDetails from './Views/Teams/TeamDetails';
import PlayerDetails from './Views/Players/PlayerDetails';


function App() {
  return (
    <main className='Main'>
      <h1>KickBall</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/players">
            <Players />
          </Route>
          <Route exact path = "/players/:id">
            <PlayerDetails />
          </Route>
          <Route exact path = "/teams">
            <Teams />
          </Route>
          <Route exact path = "/teams/:id">
            <TeamDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
