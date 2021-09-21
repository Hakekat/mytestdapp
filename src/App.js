import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import JAVAToken from './artifacts/contracts/JAVA.sol/JAVAToken.json'
import Faucet from './components/Faucet.js'
import TokenSend from './components/TokenSend.js'


function App() {

  const Token = JAVAToken;

  return (
    <div className="App">
      <Col>
      <Faucet  tokenContract={Token}/>
      </Col>
      <Col>
      <TokenSend tokenContract={Token}/>
      </Col>
      <Col>
      </Col>
    </div>
  );
}

export default App;
