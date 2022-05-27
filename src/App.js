import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import GlobalFonts from './Assets/Fonts/fonts';
import Header from './Components/Header';
import Races from './Pages/Races';
import './App.css';

const Container = styled.div`
  padding: 20px 40px;
`

function App() {
  return (
    <Router>
      <GlobalFonts />
      <Header title='DnD 5e'/>
      <Container>
        <Routes>
          <Route path='/' />
          <Route path='/races' element={<Races />} />
        </Routes>
      </Container>      
    </Router>
  );
}

export default App;
