import './MainPage.scss';
import { Row, Col } from 'react-bootstrap';
import NavButton from '../../components/NavButton';

const MainPage = () => {
  return (
    <Row className="justify-content-center pt-5 pb-5">
      <Col lg={5}>
        <nav className="d-flex flex-column justify-content-center align-items-center">
          <NavButton text="Начать" url="/start" />
          <NavButton text="Правила" url="/regulations" />
        </nav>
      </Col>
    </Row>
  );
};

export default MainPage;
