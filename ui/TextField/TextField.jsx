import styles from "./TextField.module.scss";

const TextField = ({ type, name, placeholder, required }) => {
  return (
    <div className={styles.field}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextField;
