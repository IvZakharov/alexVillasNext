import styles from "./Radio.module.scss";

const Radio = ({ text, id, name, checked }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="radio"
        className={styles.radio}
        id={id}
        name={name}
        value={text}
        defaultChecked={checked}
      />
      <label htmlFor={id} className={"text"}>
        {text}
      </label>
    </div>
  );
};

export default Radio;
