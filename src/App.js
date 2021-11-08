
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
        <Route path='/works/:project/'>
          <SolarSystem />
        </Route>
        <Route path='/works/:project/'>
          <AtomTrap />
        </Route>
        <Route path='/works/:project/'>
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
