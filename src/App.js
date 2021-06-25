import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { Process } from './pages/Dashboard/Process';
import { Ready } from './pages/Dashboard/Ready';
import { Shipping } from './pages/Dashboard/Shipping';
import './App.css';

function App() {
  return (
    <div className="w-screen font-roboto h-screen">
      <Router>
        <Switch>
          <Route exact path = "/auth">
            <Auth />
          </Route>
          <Route exact path = "/dashboard">
            <Dashboard />
          </Route>
          <Route exact path = "/dashboard/process" component = { Process } />
          <Route exact path = "/dashboard/shipping" component = { Shipping } />
          <Route exact path = "/dashboard/ready" component = { Ready } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
