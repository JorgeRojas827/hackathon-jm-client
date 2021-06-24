import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="App w-screen font-roboto h-screen bg-gray-200">
      <Router>
        <Switch>
          <Route path = "/auth">
            <Auth />
          </Route>
          <Route path = "/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Redirect to = "/auth" />
      </Router>
    </div>
  );
}

export default App;
