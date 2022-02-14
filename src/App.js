import 'bootstrap/dist/css/bootstrap.min.css';
import Contato from './contato';
import Skills from './conhecimentos';
import InfoAdicionais from './infosadicionais';
import Portifolio from './portifolio';

import { Col, Row } from 'reactstrap'; 
import './app.css'
function App() {
  return (
      <div>
        <Row className='menu'> <InfoAdicionais/> </Row>
        <Row  >
          <Col className="firstDiv " xs="9" >
              <div>
                <Skills></Skills>
                <Portifolio></Portifolio>
              </div>
          </Col>
          <Col className="contato" xs="2" >
            <Contato></Contato>
          </Col>
        </Row>
      </div>
  );
}

export default App;

