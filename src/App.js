import styled from 'styled-components';
import GlobalFonts from './Assets/Fonts/fonts'
import './App.css';
import Header from './Components/Header';
import Races from './Pages/Races';

const PaddedBody = styled.div`
  padding: 30px;  
`;

function App() {
  return (
    <>
      <GlobalFonts />
      <Header title='DnD 5e Reference'/>
      <PaddedBody>
        <Races/>
      </PaddedBody>
    </>
  );
}

export default App;
