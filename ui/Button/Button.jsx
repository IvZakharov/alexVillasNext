import styles from "./Button.module.scss";

const Button = ({ size, type, children }) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
