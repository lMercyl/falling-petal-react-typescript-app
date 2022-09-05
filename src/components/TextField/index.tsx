import styles from './TextField.module.scss';

interface TextFieldProps {
  placeholder: string;
  value?: string;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ placeholder, value, onChangeInput }: TextFieldProps) => {
  return (
    <>
      <input
        className={styles.input}
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextField;
