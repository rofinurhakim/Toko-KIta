import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/auth/login';
import Home from './pages/home';
import Navbar from './components/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/icon'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
  )
}


export default App;
