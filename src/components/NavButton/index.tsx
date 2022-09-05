import { NavLink } from 'react-router-dom';
import styles from './NavButton.module.scss';

interface NavButtonProps {
  text: string;
  url: string;
}

const NavButton = ({ text, url }: NavButtonProps) => {
  return (
    <NavLink className={styles.link} to={url}>
      {text}
    </NavLink>
  );
};

export default NavButton;
