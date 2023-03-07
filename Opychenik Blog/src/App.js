import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import {Home} from './Home'
import {About} from './About'
import {Users} from './Users'

function App() {
  return (
    <>
      <Router>
      <NaviBar />
      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route path ='/users' element={<Users />} />
        <Route path ='/about' element={<About />} />
      </Routes>
      </Router>
      <Footer />

    </>


  );
}

export default App;
