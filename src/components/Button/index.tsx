import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClickButton?: () => void;
}

const Button = ({ text, onClickButton }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClickButton}>
      {text}
    </button>
  );
};

export default Button;
