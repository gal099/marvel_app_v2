import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HeroDetails } from './pages/HeroDetails';
import { LandingPage } from './pages/LandingPage';
import { HeroesList } from './pages/HeroesList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/list">
          <HeroesList />
        </Route>
        <Route path="/hero/:heroId">
          <HeroDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
