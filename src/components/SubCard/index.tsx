import styles from './SubCard.module.scss';
import { Col } from 'react-bootstrap';
import pink from '../../assets/pink-card/sub-card.svg';
import green from '../../assets/green-card/sub-card.svg';
import blue from '../../assets/blue-card/sub-card.svg';
import yellow from '../../assets/yellow-card/sub-card.svg';
import purpule from '../../assets/purpule-card/sub-card.svg';
import black from '../../assets/black-card/sub-card.svg';
import red from '../../assets/red-card/sub-card.svg';

interface SubCardProps {
  type: string;
}

const SubCard = ({ type }: SubCardProps) => {
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
    <Col className={styles.card} md={6} lg={4} xl={3}>
      <img width={200} height={300} src={getCard(type)} alt={type} />
      <span>x1</span>
    </Col>
  );
};

export default SubCard;
