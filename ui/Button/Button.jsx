import styles from "./Button.module.scss";

const Button = ({ size, type, children, color }) => {
  return (
    <button className={styles.button} style={{borderColor: color}} type={type}>
      {children}
    </button>
  );
};

export default Button;
