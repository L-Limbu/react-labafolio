
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage';
import WorkPage from './pages/WorkPage';
import SolarSystem from './pages/uniProjects/solarSystem';
import AtomTrap from './pages/uniProjects/atomTrap';
import IsingModel from './pages/uniProjects/isingModel';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/works/solar-system/'>
          <SolarSystem />
        </Route>
        <Route path='/works/atom-trap/'>
          <AtomTrap />
        </Route>
        <Route path='/works/ising-model/'>
          <IsingModel />
        </Route>
        <Route path='/works'>
          <WorkPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
