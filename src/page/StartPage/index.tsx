import { Row, Col } from 'react-bootstrap';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import './StartPage.scss';

const StartPage = () => {
  const setGame = () => {
    return 0;
  };

  return (
    <form>
      <Row className="pt-5 pb-5 gy-5">
        <Col lg={6}>
          <TextField placeholder="игрок 1" />
        </Col>
        <Col lg={6}>
          <TextField placeholder="игрок 2" />
        </Col>
        <Col lg={12}>
          <Button text="играть" />
        </Col>
      </Row>
    </form>
  );
};

export default StartPage;
