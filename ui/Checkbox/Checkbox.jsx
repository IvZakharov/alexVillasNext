import styles from "./Checkbox.module.scss";

const Checkbox = ({ text, id, name }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        className={styles.checkbox}
        id={id}
        name={name}
        value={text}
      />
      <label htmlFor={id} className={"text"}>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
