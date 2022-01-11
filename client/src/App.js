import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Redirect, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/auth"} element={<Auth/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
