import logo from './logo.svg';
import './App.css';

import Header from './header';
import Sidebar from './sidebar';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__t'>
      <Sidebar />
      <Dashboard />
      </div>
    </div>
  );
}

export default App;
