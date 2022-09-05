import { Row, Col } from 'react-bootstrap';
import Button from '../../components/Button';
import CardGame from '../../components/CardGame';
import SubCard from '../../components/SubCard';
import './GamePage.scss';

const GamePage = () => {
  return (
    <>
      <Row className="gy-4">
        <Col lg={6} className="d-flex justify-content-center">
          <span className="text-game">Карт осталось: 8</span>
        </Col>
        <Col lg={6} className="d-flex justify-content-center">
          <span className="text-game">Карта в сбросе: 1</span>
        </Col>
      </Row>
      <Row className="pt-5 pb-5 gy-4 justify-content-center">
        <CardGame type="pink" />
        <CardGame type="green" />
        <CardGame type="yellow" />
        <CardGame type="blue" />
        <CardGame type="purpule" />
        <CardGame type="red" />
        <CardGame type="black" />
      </Row>
      <Row>
        <Col lg={12} className="d-flex justify-content-center">
          <span className="text-game">Ход игрока: Игрок 1</span>
        </Col>
      </Row>
      <Row className="gy-5">
        <Col lg={3}>
          <Button text="секрет" />
        </Col>
        <Col lg={3}>
          <Button text="запрет" />
        </Col>
        <Col lg={3}>
          <Button text="подарок" />
        </Col>
        <Col lg={3}>
          <Button text="обмен" />
        </Col>
      </Row>
      <Row className="gy-5 justify-content-center">
        <SubCard type="pink" />
        <SubCard type="green" />
        <SubCard type="yellow" />
        <SubCard type="blue" />
        <SubCard type="purpule" />
        <SubCard type="red" />
        <SubCard type="black" />
      </Row>
    </>
  );
};

export default GamePage;
