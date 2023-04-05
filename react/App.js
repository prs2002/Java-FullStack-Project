import React from 'react';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import AddCars from './components/AddCars';
import AllCars from './components/AllCars';
import Header from './components/Header';
import Menus from './components/Menus';
import Home from './components/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SearchCars from './components/SearchCars';

function App() {

  return (
    <div class = "p-5 mb-4 bg-light rounded-3">
      <Router>
        <Container>
          <Header/>
          <Row>
            <Col md = {4}>
              <Menus/>
            </Col>
            <Col md ={8}>
              {/* <Home/> */}
            
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-cars" element={<AddCars  />} />
                <Route path="/search-cars" element={<SearchCars  />} />
                <Route path="/all-cars" element={<AllCars />} />
              </Routes>
              
            </Col>
          </Row>
        </Container>
      </Router>

    </div>
  );
    
};
export default App;
