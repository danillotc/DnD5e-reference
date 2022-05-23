import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import Classes from './Pages/Classes';

const PaddedBody = styled.div`
  padding: 30px;  
`;

function App() {
  return (
    <>
      <Header title='DnD 5e Reference'/>
      <PaddedBody>
        <Classes/>
      </PaddedBody>
    </>
  );
}

export default App;
