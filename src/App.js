
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage';
import WorkPage from './pages/WorkPage';

function App() {
  return (
    <Router>
      <Switch>
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
