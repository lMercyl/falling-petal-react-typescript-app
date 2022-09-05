import './Header.scss';
import { Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Row className="justify-content-center pt-4 pb-4">
        <Col lg={6} className="d-flex justify-content-center">
          <nav className="header-navigator ">
            <ul>
              <li>
                <a target="_blank" href="https://vk.com/mercy2436" rel="noreferrer">
                  Vk.com
                </a>
              </li>
              <li>
                <a target="_blank" href="https://t.me/m11ono" rel="noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/lMercyl" rel="noreferrer">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </>
  );
};

export default Header;
