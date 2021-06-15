import logo from './logo.svg';
import './App.css';

import Header from './header';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Login from './login';

import {useSelector} from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import VideoPage from './videopage';


function App() {

  const currUser = useSelector(state => state.user);

  return (
    <Router>
       <Switch>
       <Route exact path="/">
        
      <div className="app">
        {currUser.length > 0 ?
          <>
          <Header />
          <div className='app__t'>
            <Sidebar />
            <Dashboard />
          </div> 
          </>
          : <Login />}
        
      </div>

      </Route>

      <Route path="/video">
            <VideoPage />
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
