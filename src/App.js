
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage';

import UniPage from './pages/uniProjects/uni-page';
import PersonalPage from './pages/personalProject/personalProject';
import Display from './pages/display';

import SolarSystem from './pages/uniProjects/solar-system/solarSystem';
import AtomTrap from './pages/uniProjects/atom-trap/atomTrap';
import IsingModel from './pages/uniProjects/isingModel';
import Spectroscopy from './pages/uniProjects/spectroscopy';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/display/uni-page/solar-system/'>
          <SolarSystem />
        </Route>
        <Route path='/display/uni-page/atom-trap/'>
          < AtomTrap/>
        </Route>
        <Route path='/display/uni-page/magnets'>
          <IsingModel />
        </Route>
        <Route path='/display/uni-page/spectroscopy/'>
          <Spectroscopy/>
        </Route>
        <Route path='/display/uni-page/'>
          <UniPage />
        </Route>
        

        <Route path='/display/personal-page/'>
          <PersonalPage />
        </Route>
       
        <Route path='/display'>
          <Display />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
