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
    <Container>
    <Row className="justify-content-md-center">
      <Col>
      <div>our faucet</div>
      </Col>
      <Col>
      <div> our send area</div>
      <TokenSend tokenContract={Token}/>
      </Col>
      <Col>
      <Faucet  tokenContract={Token}/>
      </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;
