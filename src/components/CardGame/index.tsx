import { Col } from 'react-bootstrap';
import styles from './CardGame.module.scss';
import pink from '../../assets/pink-card/main-card.svg';
import green from '../../assets/green-card/main-card.svg';
import blue from '../../assets/blue-card/main-card.svg';
import yellow from '../../assets/yellow-card/main-card.svg';
import purpule from '../../assets/purpule-card/main-card.svg';
import black from '../../assets/black-card/main-card.svg';
import red from '../../assets/red-card/main-card.svg';

interface CardGameProps {
  type: string;
}

const CardGame = ({ type }: CardGameProps) => {
  const getCard = (type: string) => {
    switch (type) {
      case 'pink': {
        return pink;
      }
      case 'yellow': {
        return yellow;
      }
      case 'purpule': {
        return purpule;
      }
      case 'black': {
        return black;
      }
      case 'red': {
        return red;
      }
      case 'green': {
        return green;
      }
      case 'blue': {
        return blue;
      }
      default: {
        return '';
      }
    }
  };

  return (
    <>
      <Col md={6} lg={4} xl={3} className={styles.card}>
        <img width={200} height={300} src={getCard(type)} alt={type} />
        <span>ваша</span>
      </Col>
    </>
  );
};

export default CardGame;
