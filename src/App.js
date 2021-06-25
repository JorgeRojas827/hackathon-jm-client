import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
