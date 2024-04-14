import Home from './screen/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from 'react-router-dom';
import Login from './screen/Login';
import Createuser from './screen/createuser';
function App() {

  return (
    <Router>
      <div >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/createuser" element={<Createuser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
