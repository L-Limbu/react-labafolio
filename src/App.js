
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage';

import UniPage from './pages/uniProjects/uni-page';
import PersonalPage from './pages/personalProject/personalProject';
import Display from './pages/display';
import Workpage from './pages/Works/workPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/display/uni-page/'>
          <UniPage />
        </Route>
        <Route path='/display/personal-page/'>
          <PersonalPage />
        </Route>
        <Route path='/display/work-page/'>
          <Workpage />
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
