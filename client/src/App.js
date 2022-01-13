import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Container fluid className="d-flex justify-content-center">
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/auth"} element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
